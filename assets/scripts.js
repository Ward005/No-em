document.addEventListener("DOMContentLoaded", () => {
  const santa = document.querySelector(".santa");

  // Reset animation when it ends
  santa.addEventListener("animationiteration", () => {
    santa.style.animation = "none";
    void santa.offsetWidth; // Trigger reflow
    santa.style.animation = "fly 10s linear infinite";
  });
});
