const btnDropdownAll = document.querySelectorAll(".btn-dropdown");
const btnDismiss = document.querySelector(".btn-dismiss");
const drawerToggels = document.querySelectorAll(".drawer-toggle");

function closeDrawer() {
	const currDrawer = this.closest(".drawer");
	currDrawer.classList.remove("active");
}

function openDrawer() {
	const currDrawer = document.querySelector(this.dataset.drawerTarget);
	currDrawer.classList.add("active");
}

function dropDownHandler() {
	const dropdownIcon = this.querySelector(".icon-dropdown");

	const dropdown = this.closest(".dropdown-container").querySelector(
		".drop-down"
	);
	dropdownIcon.classList.toggle("fa-chevron-down");
	dropdownIcon.classList.toggle("fa-chevron-up");
	dropdown.classList.toggle("btn-drop-down-active");
}
btnDropdownAll.forEach((btndropdown) =>
	btndropdown.addEventListener("click", dropDownHandler)
);

drawerToggels.forEach((toggle) => toggle.addEventListener("click", openDrawer));
btnDismiss.addEventListener("click", closeDrawer);
