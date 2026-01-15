const menuToggle = document.getElementById("menuToggle");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const mobileMenu = document.getElementById("mobileMenu");
const body = document.body;

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-y-full");
  mobileMenu.classList.toggle("menu-open");
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
});

barba.init({
  transitions: [
    {
      name: "simple-fade",
      async leave(data) {
        // Add fade-out animation to old container
        data.current.container.classList.add("fade-out");
        await delay(500); // match the CSS animation duration
      },
      enter(data) {
        // Add fade-in animation to new container
        data.next.container.classList.add("fade-in");
      },
    },
  ],
});

// Helper delay function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Highlight the current page in the navigation
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

//back to top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
    backToTopBtn.classList.add("opacity-100");
  } else {
    backToTopBtn.classList.add("opacity-0", "pointer-events-none");
    backToTopBtn.classList.remove("opacity-100");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});




gsap.registerPlugin(ScrambleTextPlugin);

gsap.to(".champ", {
  duration: 2,
  scrambleText: {
    text: "hey champ!👋",
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
    revealDelay: 0.3,
    speed: 0.4
  },
  delay: 0.5 // wait half a second before scrambling starts
});

gsap.to(".about", {
  duration: 2,
  scrambleText: {
    text: "about me.",
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
    revealDelay: 0.3,
    speed: 0.4
  },
  delay: 0.5 // wait half a second before scrambling starts
});


gsap.to(".proj", {
  duration: 2,
  scrambleText: {
    text: "projects.",
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
    revealDelay: 0.3,
    speed: 0.4
  },
  delay: 0.5 // wait half a second before scrambling starts
});


gsap.to(".contact", {
  duration: 2,
  scrambleText: {
    text: "i'd like to hear from you😊",
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
    revealDelay: 0.3,
    speed: 0.4
  },
  delay: 0.5 // wait half a second before scrambling starts
});




