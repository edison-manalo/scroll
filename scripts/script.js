// Toggle navigation
const navToggle = document.querySelector(".nav-toggle");
const body = document.body;
const navStateAttribute = "data-nav-state";

const toggleNav = () => {
  const currentState = body.getAttribute(navStateAttribute);

  const newState = currentState === "close" ? "open" : "close";
  body.setAttribute(navStateAttribute, newState);
};

navToggle.addEventListener("click", toggleNav);

// Close links
const navLinksContainer = document.querySelector(".links");

navLinksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("scroll-link")) {
    body.setAttribute(navStateAttribute, "close");
  }
});

// Set date
const dateElement = document.getElementById("date");
dateElement.innerHTML = `${new Date().getFullYear()}`;

// Set state
const navbarElement = document.getElementById("navbar");
const backToTopLink = document.querySelector(".back-to-top-link");
const SCROLL_THRESHOLD_NAVBAR = 100;
const SCROLL_THRESHOLD_BACK_TO_TOP = 500;

window.addEventListener("scroll", () => {
  const getScrollY = window.scrollY;

  if (getScrollY > SCROLL_THRESHOLD_NAVBAR) {
    navbarElement.classList.add("is-scrolled");
  } else {
    navbarElement.classList.remove("is-scrolled");
  }

  if (getScrollY > SCROLL_THRESHOLD_BACK_TO_TOP) {
    backToTopLink.classList.add("is-shown");
  } else {
    backToTopLink.classList.remove("is-shown");
  }
});