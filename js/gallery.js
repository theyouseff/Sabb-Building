(function () {
  "use strict";

  function initGalleryFilter() {
    var buttons = document.querySelectorAll(".gallery-filter-btn");
    var cards = document.querySelectorAll(".gallery-card");
    if (!buttons.length || !cards.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute("data-filter");

        buttons.forEach(function (b) {
          b.classList.remove("bg-ink", "text-cream");
          b.classList.add("bg-transparent", "text-ink/60");
        });
        btn.classList.add("bg-ink", "text-cream");
        btn.classList.remove("bg-transparent", "text-ink/60");

        cards.forEach(function (card) {
          var matches = filter === "all" || card.getAttribute("data-category") === filter;
          card.style.display = matches ? "" : "none";
        });
      });
    });
  }

  window.SABB_GALLERY = { init: initGalleryFilter };
})();
