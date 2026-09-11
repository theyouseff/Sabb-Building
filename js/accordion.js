(function () {
  "use strict";

  function initAccordion() {
    var items = document.querySelectorAll(".faq-item");
    items.forEach(function (item) {
      var trigger = item.querySelector(".faq-trigger");
      if (!trigger) return;
      trigger.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        items.forEach(function (other) {
          other.classList.remove("open");
          var btn = other.querySelector(".faq-trigger");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  window.SABB_ACCORDION = { init: initAccordion };
})();
