let lightMode = localStorage.getItem("lightMode");
const lightModeToggle = document.querySelector(".theme-icon");

const enableLightMode = () => {
	document.body.classList.add("light-theme");
	localStorage.setItem("lightMode", "enabled");
	lightModeToggle.className = "fas fa-moon btn-icon";
};

const disableLightMode = () => {
	document.body.classList.remove("light-theme");
	localStorage.setItem("lightMode", null);
	lightModeToggle.className = "fas fa-sun btn-icon";
};

if (lightMode === "enabled") {
	lightModeToggle.className = "fas fa-moon btn-icon";
	enableLightMode();
}

lightModeToggle.addEventListener("click", () => {
	lightMode = localStorage.getItem("lightMode");

	if (lightMode !== "enabled") {
		lightModeToggle.className = "fas fa-sun btn-icon";
		enableLightMode();
	} else {
		lightModeToggle.className = "fas fa-moon btn-icon";
		disableLightMode();
	}
});
