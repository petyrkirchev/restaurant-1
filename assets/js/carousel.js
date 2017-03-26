var carousel = document.getElementById("myCarousel1");
var imageSlides = ["assets/images/406_bg_banner.jpg", "assets/images/416_bg_banner.jpg"];
carousel.style.backgroundImage = "url('" + imageSlides[0] + "')";
carousel.style.height="960px";
carousel.style.backgroundSize = "cover";

function imageSlidesSlide() {
    var index = 0;
    setInterval(function () {
        if (index == imageSlides.length) {
            index = 0;
        }
        carousel.style.WebkitTransition = "all 2s"; // Code for Safari 3.1 to 6.0
        carousel.style.transition = "all 2s";
        carousel.style.backgroundImage = "url('" + imageSlides[index] + "')";
        index++;

    }, 5000);
}

window.addEventListener("DOMContentLoaded", imageSlidesSlide, false);