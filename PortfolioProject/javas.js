let form = document.querySelector(".contact-right form");
let tabTitles = document.querySelectorAll(".tab-link");
let tabContents = document.querySelectorAll(".tab-contents");

console.log("Form selection successful");

// Add event listeners to tab titles
tabTitles.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    tabTitles.forEach((title) => title.classList.remove("active-link"));
    tab.classList.add("active-link");

    tabContents.forEach((content) => content.classList.remove("active-tab"));
    tabContents[index].classList.add("active-tab");
  });
});

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
