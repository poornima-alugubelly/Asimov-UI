function SideBarHandler() {
	sideNavLinks.classList.toggle("side-nav-active");
	dropdownIcon.classList.toggle("fa-chevron-down");
	dropdownIcon.classList.toggle("fa-chevron-up");
}
const sideNavLinks = document.querySelector(".side-nav-links");
const navBarBtn = document.querySelector(".nav-side-bar-btn");
const dropdownIcon = navBarBtn.querySelector(".side-bar-icon");
navBarBtn.addEventListener("click", SideBarHandler);
