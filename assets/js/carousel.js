document.addEventListener("DOMContentLoaded", () => {

    const carousels = document.querySelectorAll("[data-carousel]");

    carousels.forEach((carousel) => {

        const image = carousel.querySelector(".carousel-image");
        const previousButton = carousel.querySelector("[data-prev]");
        const nextButton = carousel.querySelector("[data-next]");
        const counter = carousel.querySelector("[data-counter]");

        const images = JSON.parse(
            carousel.getAttribute("data-images")
        );

        let currentIndex = 0;


        function updateCarousel() {

            const currentImage = images[currentIndex];

            image.style.opacity = "0";

            setTimeout(() => {

                image.src = currentImage.src;
                image.alt = currentImage.alt;

                counter.textContent =
                    String(currentIndex + 1).padStart(2, "0")
                    + " / "
                    + String(images.length).padStart(2, "0");

                image.style.opacity = "1";

            }, 150);
        }


        function nextImage() {

            currentIndex++;

            if (currentIndex >= images.length) {
                currentIndex = 0;
            }

            updateCarousel();
        }


        function previousImage() {

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }

            updateCarousel();
        }


        nextButton.addEventListener("click", nextImage);

        previousButton.addEventListener("click", previousImage);


        updateCarousel();

    });

});