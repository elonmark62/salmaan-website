const helloButton = document.querySelector("#hello-button");
const message = document.querySelector("#message");
const themeButton = document.querySelector("#theme-button");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

let clicks = 0;

helloButton.addEventListener("click", () => {
  clicks = clicks + 1;
  message.textContent = `Waad gujisay badhanka ${clicks} jeer!`;
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Mahadsanid! Farriintaada waa la diray.";
  contactForm.reset();
});
