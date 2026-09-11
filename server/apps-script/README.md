# Lead capture backend — Google Apps Script

The website's CTA form posts leads to a Google Apps Script Web App, which writes each
lead to a Google Sheet and forwards it to a Telegram group. There is no separate server
to host — Google runs this for free.

This is a one-time setup. Do it once, then leads flow automatically.

## 1. Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
   (e.g. "SABB BUILDING — Leads").
2. You don't need to create a tab named `Leads` yourself — the script creates it
   automatically on the first submission, with header columns.

## 2. Paste the script

1. In the Sheet, open **Extensions → Apps Script**.
2. Delete the placeholder `Code.gs` content and paste in the contents of
   [`Code.gs`](./Code.gs) from this folder.
3. Save the project (e.g. name it "SABB Leads Backend").

## 3. Create a Telegram bot

1. In Telegram, open a chat with **@BotFather**.
2. Send `/newbot` and follow the prompts to name your bot.
3. BotFather will give you a **bot token** — looks like `123456789:AAExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`.
   Keep this private.

## 4. Add the bot to your group and get the chat ID

1. Create (or open) the Telegram group where leads should be posted.
2. Add your new bot to the group as a member.
3. Send any message in the group, then visit this URL in your browser
   (replace `<BOT_TOKEN>`):
   `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
4. Look for `"chat":{"id":-100xxxxxxxxxx, ...}` in the response — that negative
   number is your **chat ID**. (If you don't see it, send another message in the
   group first, then reload the URL.)

## 5. Store the token and chat ID securely

1. Back in the Apps Script editor, open **Project Settings** (the gear icon).
2. Under **Script Properties**, add two properties:
   - `TELEGRAM_BOT_TOKEN` → your bot token
   - `TELEGRAM_CHAT_ID` → your chat ID (including the minus sign, if any)

These stay server-side only — never exposed to the website's visitors.

## 6. Deploy as a Web App

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**, authorize the requested permissions, and copy the
   generated URL — it ends in `/exec`.

## 7. Connect the website

1. Open [`js/config.js`](../../js/config.js) in the project.
2. Paste the `/exec` URL into `APPS_SCRIPT_URL`:
   ```js
   APPS_SCRIPT_URL: "https://script.google.com/macros/s/XXXXXXXX/exec",
   ```
3. Rebuild/redeploy the site.

## 8. Test it

1. Submit the lead form on the live site with a test name/phone.
2. Confirm a new row appears in the `Leads` sheet.
3. Confirm a message arrives in the Telegram group.

## Updating the script later

Apps Script Web App URLs are versioned. If you edit `Code.gs` after the first
deploy, the live `/exec` URL will **not** pick up your changes automatically —
go to **Deploy → Manage deployments → Edit (pencil icon) → Version: New version
→ Deploy** to publish the update to the same URL.
