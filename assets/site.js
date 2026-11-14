/* Shared header/footer, progress tracking and quiz behaviour. No dependencies. */
(function () {
  // Edit these for your region. Defaults are Australian.
  var CONFIG = {
    siteName: "Bridgework",
    support: [
      { label: "National Alcohol and Other Drug Hotline", tel: "1800250015", show: "1800 250 015" },
      { label: "Lifeline", tel: "131114", show: "13 11 14" }
    ]
  };

  var root = document.body.getAttribute("data-root") || "";
  var here = document.body.getAttribute("data-section") || "";
  var nav = [
    ["foundations", "Foundations", "foundations/"],
    ["interventions", "Interventions", "interventions/"],
    ["modules", "Modules", "modules/"],
    ["cases", "Case studies", "cases/"],
    ["tools", "Practice tools", "tools/"]
  ];

  var crisis = CONFIG.support.map(function (s) {
    return s.label + ' &middot; <a href="tel:' + s.tel + '">' + s.show + "</a>";
  }).join("<br>");
  var crisisHtml = '<div class="crisis"><div class="wrap">' +
    CONFIG.support.map(function (s) {
      return "<span>" + s.label + ' &middot; <a href="tel:' + s.tel + '">' + s.show + "</a></span>";
    }).join("") + '<span>Emergency: <a href="tel:000">000</a></span></div></div>';

  var links = nav.map(function (n) {
    return '<li><a href="' + root + n[2] + '"' + (here === n[0] ? ' aria-current="page"' : "") + ">" + n[1] + "</a></li>";
  }).join("");

  var header = crisisHtml +
    '<header class="site"><div class="wrap"><a class="brand" href="' + root + 'index.html">' + CONFIG.siteName +
    '</a><nav class="main" aria-label="Main"><ul>' + links + "</ul></nav></div></header>";

  var footer = '<footer class="site"><div class="wrap">' +
    '<div><h2>' + CONFIG.siteName + '</h2><p>Free education on addiction medicine, addiction psychology and social work interventions. Educational use only; not clinical advice.</p></div>' +
    '<div><h2>Learn</h2><ul>' +
    '<li><a href="' + root + 'foundations/">Foundations</a></li>' +
    '<li><a href="' + root + 'interventions/">Intervention library</a></li>' +
    '<li><a href="' + root + 'modules/">Modules</a></li>' +
    '<li><a href="' + root + 'tools/glossary.html">Glossary</a></li></ul></div>' +
    '<div><h2>About</h2><ul>' +
    '<li><a href="' + root + 'about.html">Editorial policy</a></li>' +
    '<li><a href="' + root + 'support.html">Get support</a></li></ul></div>' +
    '<div><h2>Get support</h2><p>' + crisis.replace(/<\/?span>/g, "") + "</p></div></div></footer>";

  document.body.insertAdjacentHTML("afterbegin", '<a class="skip" href="#main">Skip to content</a>' + header);
  document.body.insertAdjacentHTML("beforeend", footer);

  // Progress (stored only in this browser).
  var KEY = "bridgework-progress";
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  window.Bridgework = {
    markDone: function (id) { var p = load(); p[id] = true; save(p); },
    isDone: function (id) { return !!load()[id]; },
    count: function (ids) { var p = load(); return ids.filter(function (i) { return p[i]; }).length; }
  };

  // Generic quiz: .quiz > .opt[data-correct][data-fb]; optional data-quiz-id on .quiz
  document.querySelectorAll(".quiz").forEach(function (q) {
    var fb = q.querySelector(".fb");
    q.querySelectorAll(".opt").forEach(function (b) {
      b.addEventListener("click", function () {
        var ok = b.getAttribute("data-correct") === "true";
        b.classList.remove("right", "wrong");
        b.classList.add(ok ? "right" : "wrong");
        fb.innerHTML = "<strong>" + (ok ? "Yes. " : "Not quite. ") + "</strong>" + b.getAttribute("data-fb");
        if (ok && q.getAttribute("data-quiz-id")) window.Bridgework.markDone(q.getAttribute("data-quiz-id"));
      });
    });
  });
})();
