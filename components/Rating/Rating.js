const ratings = document.querySelectorAll(".rating-dynamic");

ratings.forEach((rating) =>
  rating.addEventListener("click", () => {
    for (i = 0; i < rating.dataset.starValue; i++) {
      ratings[i].classList.add("fas");
      ratings[i].classList.remove("far");
    }
    for (i = rating.dataset.starValue; i < 5; i++) {
      ratings[i].classList.remove("fas");
      ratings[i].classList.add("far");
    }
  })
);
