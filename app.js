// Scroll animation using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.animate-on-scroll, .fun-fact-card, .activity-card, .memory-card, .topper-card, .testimonial-card').forEach(el => {
    observer.observe(el);
  });
});