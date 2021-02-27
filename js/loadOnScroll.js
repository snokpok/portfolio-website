const checkpoints = [600, 1200];

const { pathname } = window.location;

const splitPathnameArray = pathname.split("/");
const endpoint = splitPathnameArray[splitPathnameArray.length - 1];
if (endpoint == "index.html" || endpoint == "") {
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= checkpoints[0]) {
      const projectsContainer = document.querySelector(
        ".section-container#projects"
      );
      projectsContainer.style.animation = "fadeInLeft 1s ease backwards";
      projectsContainer.style.visibility = "visible";
      document.querySelector("html").style.overflowY = "scroll";
    }
    if (currentScrollPos >= checkpoints[1]) {
      const aboutContainer = document.querySelector(".section-container#about");
      aboutContainer.style.animation = "fadeInRight 1s ease backwards";
      aboutContainer.style.visibility = "visible";
    }
  });
} else if (endpoint == "resume.html") {
  document.querySelector("html").style.overflowY = "scroll";
}
