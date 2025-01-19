document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    let index = 0;

    function showSlide(newIndex) {
        if (newIndex < 0) {
            index = totalSlides - 1; // Go to the last slide if at the beginning
        } else if (newIndex >= totalSlides) {
            index = 0; // Go to the first slide if at the end
        } else {
            index = newIndex;
        }
        gallery.style.transform = `translateX(-${index * 100}%)`;
    }

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(index + 1);
    }, 5000); // 5 seconds per slide
});
