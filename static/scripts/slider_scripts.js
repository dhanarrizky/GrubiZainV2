const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButton = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".Products__container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = (imageList.scrollWidth-18) - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
    
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;
    
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            scrollbarThumb.style.left = `${boundedPosition}px`;
    
            // Mengupdate posisi scroll dari imageList
            const scrollRatio = boundedPosition / maxThumbPosition;
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
            imageList.scrollLeft = maxScrollLeft * scrollRatio;
        }
    
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
    
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    
    //slide images aaccording to the slide button clicks
    slideButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id == "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior:"smooth"})
        });
    });

    const handleSlideButtons = () => {
        slideButton[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButton[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    // update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });

    // Initialize the slider
    const init = () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    };

    // Wait until all images are loaded before initializing
    const images = imageList.querySelectorAll("img");
    let imagesLoaded = 0;

    images.forEach(image => {
        if (image.complete) {
            imagesLoaded++;
        } else {
            image.addEventListener("load", () => {
                imagesLoaded++;
                if (imagesLoaded === images.length) {
                    init();
                }
            });
        }
    });

    // If all images are already loaded, initialize immediately
    if (imagesLoaded === images.length) {
        init();
    }
};

document.addEventListener("DOMContentLoaded", initSlider);