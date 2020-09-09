window.onbeforeunload = () => window.scrollTo(0, 0);

const topBanner = document.getElementById("my-banner");
const projects = document.getElementById("projects");
const aboutMe = document.getElementById("about-me");
const socialCard = document.getElementsByClassName("modal")[0];

const toggleSocial = () => {
  socialCard.style.display = socialCard.style.display === "" ? "block" : "";
};

const scrollPage = (scroll_pos) => {
  var height = aboutMe.getBoundingClientRect().height;
  window.scrollTo({ top: height * scroll_pos, left: 0, behavior: "smooth" });
};

socialCard.addEventListener("click", toggleSocial);
topBanner.addEventListener("click", () => scrollPage(1));
aboutMe.addEventListener("click", () => scrollPage(2));

document.addEventListener("wheel", (event) => {
  var page_pos = Math.floor(
    window.scrollY / aboutMe.getBoundingClientRect().height
  );
  if (event.deltaY > 0) {
    scrollPage(++page_pos);
  } else {
    scrollPage(--page_pos);
  }
});
//projects.addEventListener("click", toggleSocial);
