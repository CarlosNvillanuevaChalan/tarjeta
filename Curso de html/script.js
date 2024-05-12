document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const images = gallery.querySelectorAll("img");
    let index = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    showImage(index);
    setInterval(nextImage, 3000);
});
