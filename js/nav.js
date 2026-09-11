(function () {
  "use strict";

  function initStickyNav() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;

    var lastY = window.scrollY;
    var threshold = 60;

    function onScroll() {
      var y = window.scrollY;

      if (y > threshold) {
        nav.classList.add("bg-cream/85", "backdrop-blur-md", "shadow-sm");
        nav.classList.remove("bg-transparent");
      } else {
        nav.classList.remove("bg-cream/85", "backdrop-blur-md", "shadow-sm");
        nav.classList.add("bg-transparent");
      }

      if (y > lastY && y > threshold * 2) {
        nav.classList.add("-translate-y-full");
      } else {
        nav.classList.remove("-translate-y-full");
      }

      lastY = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initMobileMenu() {
    var toggle = document.getElementById("mobile-menu-toggle");
    var panel = document.getElementById("mobile-menu");
    if (!toggle || !panel) return;

    function close() {
      panel.classList.add("translate-x-full");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var isOpen = !panel.classList.contains("translate-x-full");
      panel.classList.toggle("translate-x-full");
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    panel.querySelectorAll("a[href], button[data-lang-btn]").forEach(function (link) {
      link.addEventListener("click", close);
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  window.SABB_NAV = {
    init: function () {
      initStickyNav();
      initMobileMenu();
      initSmoothAnchors();
    },
  };
})();
