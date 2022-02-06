function Sizing4isRight() {
	let classOnOff = window.matchMedia("(max-width: 1024px)").matches;
	if (classOnOff) {
		sideNavLinks.classList.add("drop-down");
	} else {
		sideNavLinks.classList.remove("drop-down");
	}
}
const sideNavLinks = document.querySelector(".side-nav-links");
window.addEventListener("resize", Sizing4isRight);
