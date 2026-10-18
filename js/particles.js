/*
  particles.js
  Constellation background (tsparticles from a CDN).
  The canvas sits behind the page and does not capture clicks.
  Reduced-motion users get a still background instead.
*/

(function () {
  const host = document.getElementById("particles");
  if (!host || !window.tsParticles) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.tsParticles.load("particles", {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    detectRetina: true,
    particles: {
      number: { value: 70, density: { enable: true, area: 900 } },
      color: { value: ["#f5c518", "#7dd3fc", "#f472b6", "#a3e635", "#c4b5fd"] },
      links: {
        enable: true,
        distance: 150,
        color: "#8a8a8a",
        opacity: 0.35,
        width: 1,
      },
      move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
      opacity: { value: 0.85 },
      size: { value: { min: 1.5, max: 3.5 } },
    },
    /* detectsOn "window" so the canvas can stay click-through
       (pointer-events: none) and still see the cursor. */
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: true, mode: ["grab", "repulse"] },
        onClick: { enable: false },
      },
      modes: {
        grab: {
          distance: 200,
          links: { opacity: 0.7 },
        },
        repulse: {
          distance: 140,
          duration: 0.4,
          speed: 0.5,
          factor: 60,
        },
      },
    },
  });
})();
