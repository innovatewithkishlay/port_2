// Elements Animation
const animateElements = () => {
  const elements = document.querySelectorAll(
    ".about-img, .about-text, .project-card, .skill-category h3, .skill-item, .achievement-card, .certificate-card"
  );

  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      element.classList.add("animate");
    }
  });
};

// Skill Bar Animation
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-progress");

  skillBars.forEach((bar) => {
    const position = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      const width = bar.getAttribute("data-width");
      bar.style.width = `${width}%`;
    }
  });
};

// Initialize Certificates Slider
const initSlider = () => {
  const track = document.querySelector(".certificates-track");
  const dots = document.querySelectorAll(".slider-dot");
  const cards = document.querySelectorAll(".certificate-card");
  const cardWidth = cards[0].offsetWidth + 30; // Adding gap

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Update active dot
      document.querySelector(".slider-dot.active").classList.remove("active");
      dot.classList.add("active");

      // Move track
      track.style.transform = `translateX(-${cardWidth * index}px)`;
    });
  });
};

// Back to Top Button
const handleBackToTop = () => {
  const backToTopBtn = document.querySelector(".back-to-top");

  if (window.scrollY > 300) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
};

// Resume Download
document
  .getElementById("resume-download")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "Shivam_CV_Updated(1).pdf"; // Replace with actual PDF path
    link.download = "Your_Resume.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu");
mobileMenuBtn.addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Event Listeners
window.addEventListener("scroll", () => {
  animateElements();
  animateSkillBars();
  handleBackToTop();
});

window.addEventListener("load", () => {
  animateElements();
  animateSkillBars();
  initSlider();
});
