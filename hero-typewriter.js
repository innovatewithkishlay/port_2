const typewriterElement = document.getElementById("typewriter");
const words = [
  "Software Developer",
  "AI Engineer",
  "ML Engineer",
  "And More...",
];
let wordIndex = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;
let isTyping = false;

function type() {
  if (isDeleting) {
    currentText = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    currentText = words[wordIndex].substring(0, letterIndex + 1);
    letterIndex++;
  }

  typewriterElement.textContent = currentText;

  if (!isDeleting && letterIndex === words[wordIndex].length) {
    isTyping = false;
    setTimeout(() => {
      isDeleting = true;
    }, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  if (isTyping) {
    setTimeout(type, 100);
  } else {
    setTimeout(type, 50);
  }
}

function startTyping() {
  isTyping = true;
  type();
}

window.onload = startTyping;
