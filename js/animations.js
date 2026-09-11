(function () {
  "use strict";

  function markGsapReady() {
    document.documentElement.classList.add("gsap-ready");
  }

  function initReveals() {
    gsap.utils.toArray(".reveal").forEach(function (el) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });

    gsap.utils.toArray(".reveal-stagger").forEach(function (group) {
      var items = group.children;
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
          once: true,
        },
      });
    });
  }

  function initHeroEntrance() {
    var tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.to("[data-hero-eyebrow]", { opacity: 1, y: 0 })
      .to("[data-hero-headline]", { opacity: 1, y: 0 }, "-=0.7")
      .to("[data-hero-sub]", { opacity: 1, y: 0 }, "-=0.7")
      .to("[data-hero-cta]", { opacity: 1, y: 0 }, "-=0.6");
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-count-to"));
    var decimals = el.getAttribute("data-decimals") ? parseInt(el.getAttribute("data-decimals"), 10) : 0;
    var obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: function () {
        el.textContent = obj.val.toFixed(decimals);
      },
    });
  }

  function initCounters() {
    gsap.utils.toArray("[data-count-to]").forEach(function (el) {
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: function () {
          animateCounter(el);
        },
      });
    });
  }

  function initMethodologyLine() {
    var line = document.querySelector("[data-methodology-line]");
    if (!line) return;
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: line.parentElement,
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  }

  // If the GSAP/ScrollTrigger CDN scripts fail to load (network hiccup,
  // ad blocker, etc.), skip all animation wiring — content already renders
  // fully visible by default per the CSS in src/input.css, so nothing here
  // is required for the page to be usable.
  function fallbackCounters() {
    document.querySelectorAll("[data-count-to]").forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count-to"));
      var decimals = el.getAttribute("data-decimals") ? parseInt(el.getAttribute("data-decimals"), 10) : 0;
      el.textContent = target.toFixed(decimals);
    });
  }

  window.SABB_ANIM = {
    init: function () {
      if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        fallbackCounters();
        return;
      }
      gsap.registerPlugin(ScrollTrigger);
      markGsapReady();
      initReveals();
      initHeroEntrance();
      initCounters();
      initMethodologyLine();
    },
  };
})();
