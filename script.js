// === Apply saved theme on load ===
window.addEventListener("DOMContentLoaded", () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  
    // === Load Real Team Members ===
    const teamMembers = ["Enala", "Prianka", "Sera Kim"];
    const loadBtn = document.getElementById("loadUsersBtn");
    const userList = document.getElementById("userList");
  
    if (loadBtn && userList) {
      loadBtn.addEventListener("click", () => {
        userList.innerHTML = ""; // Clear previous list
        teamMembers.forEach(name => {
          const li = document.createElement("li");
          li.textContent = name;
          userList.appendChild(li);
        });
      });
    }
  
    // === Real-time clock ===
    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const clockDisplay = document.getElementById("clockDisplay");
      if (clockDisplay) clockDisplay.textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();
  
    // === Contact form validation ===
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();
  
        if (!name || !message) {
          alert("Please fill out all fields.");
        } else {
          document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
          e.target.reset();
        }
      });
    }
  
    // === FAQ toggle ===
    document.querySelectorAll(".question").forEach((q) => {
      q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("visible");
      });
    });
  });
  
  // === Theme toggle and save preference ===
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
  