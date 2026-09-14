(function () {
  "use strict";

  function initLeadModal() {
    var modal = document.getElementById("lead-modal");
    var panel = document.getElementById("lead-modal-panel");
    var backdrop = document.getElementById("lead-modal-backdrop");
    var openBtn = document.getElementById("open-lead-form");
    var closeBtn = document.getElementById("lead-modal-close");
    if (!modal || !panel || !openBtn) return;

    function isOpen() {
      return modal.classList.contains("pointer-events-auto");
    }

    function open() {
      modal.classList.remove("opacity-0", "pointer-events-none");
      modal.classList.add("opacity-100", "pointer-events-auto");
      panel.classList.remove("scale-95");
      panel.classList.add("scale-100");
      document.body.classList.add("overflow-hidden");
      var firstField = modal.querySelector("input, textarea, select");
      if (firstField) firstField.focus();
    }

    function close() {
      modal.classList.add("opacity-0", "pointer-events-none");
      modal.classList.remove("opacity-100", "pointer-events-auto");
      panel.classList.add("scale-95");
      panel.classList.remove("scale-100");
      document.body.classList.remove("overflow-hidden");
      openBtn.focus();
    }

    openBtn.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (backdrop) backdrop.addEventListener("click", close);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) close();
    });

    window.SABB_LEAD_MODAL = { open: open, close: close };
  }

  window.SABB_MODAL = { init: initLeadModal };
})();
