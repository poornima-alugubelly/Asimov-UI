const btnDropdownAll = document.querySelectorAll(".btn-dropdown");

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
