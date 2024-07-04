let detail = document.querySelector(".skill-experience-education");
let skill = document.querySelector(".about-skill");
let education = document.querySelector(".about-education");
let experience = document.querySelector(".about-experience");
skill.classList.remove("hide-skill");
detail.addEventListener("click", (event) => {
  let userchoice = event.target.getAttribute("id");
  if (userchoice === "skill") {
    experience.classList.add("hide-experience");
    education.classList.add("hide-education");
    skill.classList.remove("hide-skill");
  } else if (userchoice === "experience") {
    skill.classList.add("hide-skill");
    education.classList.add("hide-education");
    experience.classList.remove("hide-experience");
  } else {
    skill.classList.add("hide-skill");
    experience.classList.add("hide-experience");
    education.classList.remove("hide-education");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Thank you for your message! I will get back to you soon.");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
});
