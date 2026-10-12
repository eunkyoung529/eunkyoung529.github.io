(function () {
  var doc = document.documentElement;
  doc.classList.remove("no-js");

  // header: transparent over the dark hero, solid once scrolled
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      header.classList.toggle("scrolled", open || window.scrollY > 24);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // scroll reveal
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  // active link for in-page navigation (home nav + project page toc)
  var links = Array.prototype.slice.call(document.querySelectorAll("[data-spy] a[href^='#']"));
  var targets = links
    .map(function (a) {
      return document.getElementById(a.getAttribute("href").slice(1));
    })
    .filter(Boolean);
  function spy() {
    var y = window.scrollY + 140;
    var current = null;
    targets.forEach(function (t) {
      if (t.offsetTop <= y) current = t.id;
    });
    links.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  if (targets.length) {
    spy();
    window.addEventListener("scroll", spy, { passive: true });
  }

  // lightbox for figures
  var zoomables = document.querySelectorAll(".figure img");
  if (zoomables.length && typeof HTMLDialogElement !== "undefined") {
    var dlg = document.createElement("dialog");
    dlg.className = "lightbox";
    var big = document.createElement("img");
    dlg.appendChild(big);
    document.body.appendChild(dlg);
    dlg.addEventListener("click", function () {
      dlg.close();
    });
    zoomables.forEach(function (img) {
      img.addEventListener("click", function () {
        big.src = img.currentSrc || img.src;
        big.alt = img.alt;
        dlg.showModal();
      });
    });
  }
})();
