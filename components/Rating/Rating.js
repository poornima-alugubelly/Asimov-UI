const ratings = document.querySelectorAll(".rating");
const ratingStarForm = document.querySelector(".rating-star-form");
const ratingIcons = document.querySelectorAll(".rating .rating-star-icon");

ratings.forEach((rating, id) =>
  rating.addEventListener("change", () => {
    for (i = 0; i <= id; i++) {
      ratingIcons[i].classList.add("fas");
      ratingIcons[i].classList.remove("far");
    }
    for (i = id + 1; i < 5; i++) {
      ratingIcons[i].classList.remove("fas");
      ratingIcons[i].classList.add("far");
    }
  })
);

ratingStarForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ratings.forEach((rating) => {
    const ratingInput = rating.querySelector('input[type="radio"]');
    if (ratingInput.checked) console.log(ratingInput.value);
  });
});
