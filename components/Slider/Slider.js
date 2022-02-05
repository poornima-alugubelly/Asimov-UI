const sliders = document.querySelectorAll(".slider");
function sliderHandler() {
	const style = this.style;
	const percentage = this.value;
	const newSliderColor = `linear-gradient(
    90deg,
    var(--primary-color) ${percentage}%,
    var(--ternary-color) ${percentage}%
)`;

	style.background = newSliderColor;
}
sliders.forEach((slider) => slider.addEventListener("input", sliderHandler));
