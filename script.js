const toggleModeBtn = document.getElementById("toggle-mode-btn");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const body = document.body;

toggleModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  moonIcon.style.display = body.classList.contains("dark-mode")
    ? "none"
    : "block";
  sunIcon.style.display = body.classList.contains("dark-mode")
    ? "block"
    : "none";
});
