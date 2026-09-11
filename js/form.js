(function () {
  "use strict";

  function setStatus(statusEl, text, kind) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.classList.remove("hidden", "text-accent", "text-red-600");
    statusEl.classList.add(kind === "error" ? "text-red-600" : "text-accent");
  }

  function initLeadForm() {
    var form = document.getElementById("lead-form");
    if (!form) return;

    var statusEl = document.getElementById("lead-form-status");
    var submitBtn = form.querySelector("[type=submit]");
    var submitLabel = submitBtn ? submitBtn.querySelector("[data-i18n]") : null;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.querySelector("[name=name]").value.trim();
      var phone = form.querySelector("[name=phone]").value.trim();
      var service = form.querySelector("[name=service]").value;
      var message = form.querySelector("[name=message]").value.trim();
      var lang = window.SABB_CURRENT_LANG || "uz";

      if (!name || !phone) {
        setStatus(statusEl, window.SABB_I18N.t("cta.error_required"), "error");
        return;
      }

      var endpoint = window.SABB_CONFIG && window.SABB_CONFIG.APPS_SCRIPT_URL;
      if (!endpoint) {
        console.warn("SABB_CONFIG.APPS_SCRIPT_URL is not set — form data was not sent.", {
          name: name,
          phone: phone,
          service: service,
          message: message,
          lang: lang,
        });
        setStatus(statusEl, window.SABB_I18N.t("cta.success"), "success");
        form.reset();
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = window.SABB_I18N.t("cta.submitting");

      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ name: name, phone: phone, service: service, message: message, lang: lang }),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          if (res && res.ok) {
            setStatus(statusEl, window.SABB_I18N.t("cta.success"), "success");
            form.reset();
          } else {
            setStatus(statusEl, window.SABB_I18N.t("cta.error"), "error");
          }
        })
        .catch(function () {
          setStatus(statusEl, window.SABB_I18N.t("cta.error"), "error");
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
          if (submitLabel) submitLabel.textContent = window.SABB_I18N.t("cta.submit");
        });
    });
  }

  window.SABB_FORM = { init: initLeadForm };
})();
