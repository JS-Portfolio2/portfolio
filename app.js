(function () {
  "use strict";

  var THEME_KEY = "portfolio-theme";
  var LANG_KEY = "portfolio-lang";
  var DEFAULT_LANG = "ar";

  /* ---------------------------------------------------------------------
     Theme
     --------------------------------------------------------------------- */
  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY);
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0B0E14" : "#F6F4EF");
  }
  function initThemeToggle() {
    var btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ---------------------------------------------------------------------
     Language / i18n
     --------------------------------------------------------------------- */
  function getStoredLang() {
    return localStorage.getItem(LANG_KEY);
  }

  function resolvePath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function applyTranslations(lang) {
    var dict = window.SITE_I18N && window.SITE_I18N[lang];
    if (!dict) return;

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dict.dir);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = resolvePath(dict, key);
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      var value = resolvePath(dict, key);
      if (value !== undefined) el.setAttribute("placeholder", value);
    });

    // brand / meta
    document.querySelectorAll("[data-i18n-name]").forEach(function (el) {
      el.textContent = dict.meta.name;
    });
    document.querySelectorAll("[data-i18n-initials]").forEach(function (el) {
      el.textContent = dict.meta.initials;
    });
    document.querySelectorAll("[data-i18n-role]").forEach(function (el) {
      el.textContent = dict.meta.role;
    });

    // update lang trigger label + selected state
    document.querySelectorAll(".lang-current").forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll(".lang-menu li").forEach(function (li) {
      li.setAttribute("aria-selected", li.getAttribute("data-lang") === lang ? "true" : "false");
    });

    localStorage.setItem(LANG_KEY, lang);

    // re-run reveal setup since RTL/LTR can change layout metrics
    window.dispatchEvent(new Event("resize"));
  }

  function initLangSwitch() {
    var switchers = document.querySelectorAll(".lang-switch");
    switchers.forEach(function (sw) {
      var trigger = sw.querySelector(".lang-trigger");
      var menu = sw.querySelector(".lang-menu");
      if (!trigger || !menu) return;

      trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = sw.classList.toggle("open");
        trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      menu.querySelectorAll("li").forEach(function (li) {
        li.addEventListener("click", function () {
          var lang = li.getAttribute("data-lang");
          applyTranslations(lang);
          sw.classList.remove("open");
          trigger.setAttribute("aria-expanded", "false");
        });
      });
    });

    document.addEventListener("click", function () {
      switchers.forEach(function (sw) {
        sw.classList.remove("open");
        var t = sw.querySelector(".lang-trigger");
        if (t) t.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------------------
     Mobile nav
     --------------------------------------------------------------------- */
  function initMobileNav() {
    var burger = document.querySelector(".nav-burger");
    var nav = document.querySelector(".main-nav");
    if (!burger || !nav) return;
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  /* ---------------------------------------------------------------------
     Active nav link (based on current file)
     --------------------------------------------------------------------- */
  function markActiveNav() {
    var current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".main-nav a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === current) a.classList.add("active");
    });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal (IntersectionObserver)
     --------------------------------------------------------------------- */
  function initScrollReveal() {
    var targets = document.querySelectorAll(".reveal, .reveal-lines");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
      targets.forEach(function (t) { t.classList.add("in-view"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach(function (t) { observer.observe(t); });
  }

  // assign incremental --i for staggered groups
  function initStaggerIndexes() {
    document.querySelectorAll("[data-stagger]").forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, idx) {
        child.style.setProperty("--i", idx);
      });
    });
    document.querySelectorAll(".reveal-lines").forEach(function (block) {
      var lines = block.querySelectorAll(".line");
      lines.forEach(function (line, idx) {
        line.querySelector(".inner").style.setProperty("--i", idx);
      });
    });
  }

  /* ---------------------------------------------------------------------
     Project filters (projects page)
     --------------------------------------------------------------------- */
  function initFilters() {
    var tabs = document.querySelectorAll(".filter-tab");
    var cards = document.querySelectorAll(".project-card");
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        var filter = tab.getAttribute("data-filter");
        cards.forEach(function (card) {
          var cat = card.getAttribute("data-category");
          var show = filter === "all" || filter === cat;
          card.classList.toggle("hidden", !show);
        });
      });
    });
  }

  /* ---------------------------------------------------------------------
     Contact form (front-end only simulation)
     --------------------------------------------------------------------- */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    var successBox = document.querySelector("[data-form-success]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (successBox) successBox.classList.add("show");
      form.reset();
      if (successBox) successBox.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ---------------------------------------------------------------------
     Init
     --------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    var lang = getStoredLang() || DEFAULT_LANG;
    applyTranslations(lang);

    initThemeToggle();
    initLangSwitch();
    initMobileNav();
    markActiveNav();
    initStaggerIndexes();
    initScrollReveal();
    initFilters();
    initContactForm();
  });
})();
