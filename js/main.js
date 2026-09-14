(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var lang = (window.SABB_I18N && window.SABB_I18N.getStoredLang()) || (window.SABB_I18N && window.SABB_I18N.DEFAULT_LANG) || "uz";
    window.SABB_I18N.applyLanguage(lang);
    window.SABB_I18N.initLangSwitcher();

    window.SABB_NAV.init();
    window.SABB_ACCORDION.init();
    window.SABB_GALLERY.init();
    window.SABB_CAROUSELS.init();
    window.SABB_ANIM.init();
    window.SABB_FORM.init();
    window.SABB_MODAL.init();
    window.SABB_MARQUEE.init();

    document.getElementById("current-year").textContent = new Date().getFullYear();
  });
})();
