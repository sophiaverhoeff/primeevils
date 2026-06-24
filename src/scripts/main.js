const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  },
  { passive: true }
);

const toggle = document.getElementById("notation-toggle");
const plain = document.getElementById("demo-plain");
const notation = document.getElementById("demo-notation");
const lbl = document.getElementById("toggle-lbl");

toggle.addEventListener("change", () => {
  const on = toggle.checked;
  plain.classList.toggle("hidden", on);
  notation.classList.toggle("active", on);
  lbl.textContent = on ? "Hide notation" : "Show notation";
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".fade-up").forEach((el) => el.classList.add("visible"));
}
