/*
  analytics.js
  Google Analytics 4. GA_MEASUREMENT_ID must be a real measurement id
  from analytics.google.com. An empty string sends nothing.
*/
var GA_MEASUREMENT_ID = "G-3RL2HBXMF2";

(function () {
  var id = typeof GA_MEASUREMENT_ID === "string" ? GA_MEASUREMENT_ID.trim() : "";
  if (!/^G-[A-Z0-9]+$/.test(id)) return;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id);
})();
