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

drawerToggels.forEach((toggle) => toggle.addEventListener("click", openDrawer));
btnDismiss.addEventListener("click", closeDrawer);
