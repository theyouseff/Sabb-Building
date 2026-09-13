(function () {
  "use strict";

  function ensureEnoughCopies(track, viewportWidth) {
    var sets = track.querySelectorAll(".logo-marquee-set");
    if (sets.length < 1) return;
    var template = sets[0];
    // Keep enough duplicate copies that the track is always at least 3x the
    // viewport width — guarantees the loop never runs out of content to
    // show, no matter how wide the screen is.
    var guard = 0;
    while (track.scrollWidth < viewportWidth * 3 && guard < 20) {
      track.appendChild(template.cloneNode(true));
      guard++;
    }
  }

  function measure(track) {
    var sets = track.querySelectorAll(".logo-marquee-set");
    if (sets.length < 2) return;
    var distance = sets[1].getBoundingClientRect().left - sets[0].getBoundingClientRect().left;
    if (distance > 0) {
      track.style.setProperty("--marquee-distance", distance + "px");
    }
  }

  function initMarquee() {
    var track = document.querySelector(".logo-marquee-track");
    if (!track) return;

    var viewport = track.closest(".logo-marquee-viewport");
    ensureEnoughCopies(track, viewport ? viewport.clientWidth : window.innerWidth);
    measure(track);

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        ensureEnoughCopies(track, viewport ? viewport.clientWidth : window.innerWidth);
        measure(track);
      }, 150);
    });
  }

  window.SABB_MARQUEE = { init: initMarquee };
})();
