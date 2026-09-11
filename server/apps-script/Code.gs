/**
 * SABB BUILDING — lead capture backend.
 * Deploy this bound to a Google Sheet as a Web App.
 * See README.md in this folder for the full setup steps.
 */

function doPost(e) {
  var props = PropertiesService.getScriptProperties();
  var BOT_TOKEN = props.getProperty('TELEGRAM_BOT_TOKEN');
  var CHAT_ID = props.getProperty('TELEGRAM_CHAT_ID');

  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonResponse({ ok: false, error: 'invalid_payload' });
  }

  var name = (data.name || '').toString().trim();
  var phone = (data.phone || '').toString().trim();
  var service = (data.service || '').toString().trim();
  var message = (data.message || '').toString().trim();
  var lang = (data.lang || '').toString().trim();

  if (!name || !phone) {
    return jsonResponse({ ok: false, error: 'missing_required_fields' });
  }

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');
    sheet.appendRow(['Sana', 'Ism', 'Telefon', 'Xizmat turi', 'Xabar', 'Til']);
  }
  sheet.appendRow([new Date(), name, phone, service, message, lang]);

  if (BOT_TOKEN && CHAT_ID) {
    var text = "🆕 Yangi so'rov / Новая заявка\n\n" +
      '👤 ' + name + '\n' +
      '📞 ' + phone + '\n' +
      '🏗 ' + (service || '-') + '\n' +
      '💬 ' + (message || '-');

    UrlFetchApp.fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage', {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ chat_id: CHAT_ID, text: text }),
      muteHttpExceptions: true,
    });
  }

  return jsonResponse({ ok: true });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
