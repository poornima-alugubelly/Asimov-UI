const btnDropdownAll = document.querySelectorAll(".btn-dropdown");
const btnDismiss = document.querySelectorAll(".btn-dismiss");
const drawerToggels = document.querySelectorAll(".drawer-toggle");

function dropDownHandler() {
	const dropdownIcon = this.querySelector(".icon-dropdown");

	const dropdown = this.closest(".dropdown-container").querySelector(
		".drop-down"
	);
	dropdownIcon.classList.toggle("fa-chevron-down");
	dropdownIcon.classList.toggle("fa-chevron-up");
	dropdown.classList.toggle("btn-drop-down-active");
}

function closeDrawer() {
	const currDrawer = this.closest(".drawer");

	currDrawer.classList.remove("active");
}

function openDrawer() {
	const currDrawer = document.querySelector(this.dataset.drawerTarget);

	currDrawer.classList.add("active");
}

btnDropdownAll.forEach((btndropdown) =>
	btndropdown.addEventListener("click", dropDownHandler)
);

drawerToggels.forEach((toggle) => toggle.addEventListener("click", openDrawer));
btnDismiss.forEach((btn) => btn.addEventListener("click", closeDrawer));
