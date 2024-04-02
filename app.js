window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var sections = document.querySelectorAll(".section");
  var currentSection = "";

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - navbar.offsetHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navbar.classList.toggle("scrolled", currentSection !== "");

  // Customize the color based on the current section
  if (currentSection === "home") {
    navbar.style.backgroundColor = "green";
  } else if (currentSection === "about") {
    navbar.style.backgroundColor = "red";
  } else if (currentSection === "services") {
    navbar.style.backgroundColor = "blue";
  } else {
    navbar.style.backgroundColor = "#333"; // Default color
  }
});
