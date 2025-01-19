document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const totalSlides = slides.length;

    let currentIndex = 0;
    let interval;

    // Function to show a specific slide
    function showSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides; // Loop back if out of bounds
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Automatic Slideshow
    function startSlideshow() {
        interval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000); // 5 seconds per slide
    }

    // Stop slideshow on user interaction
    function stopSlideshow() {
        clearInterval(interval);
    }

    // Event Listeners for Navigation Buttons
    prevButton.addEventListener("click", () => {
        stopSlideshow();
        showSlide(currentIndex - 1);
        startSlideshow(); // Resume slideshow after interaction
    });

    nextButton.addEventListener("click", () => {
        stopSlideshow();
        showSlide(currentIndex + 1);
        startSlideshow(); // Resume slideshow after interaction
    });

    // Start the slideshow on page load
    startSlideshow();
});
