document.addEventListener("DOMContentLoaded", function() {
  var homeLink = document.getElementById("home-link");
  var aboutLink = document.getElementById("about-link");
  var projectsLink = document.getElementById("projects-link");
  var contactLink = document.getElementById("contact-link");

  var homeSection = document.getElementById("home-section");
  var aboutSection = document.getElementById("about-section");
  var projectsSection = document.getElementById("projects-section");
  var contactSection = document.getElementById("contact-section");

  homeLink.addEventListener("click", function() {
    homeSection.scrollIntoView({ behavior: "smooth" });
  });

  aboutLink.addEventListener("click", function() {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  projectsLink.addEventListener("click", function() {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });

  contactLink.addEventListener("click", function() {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});
