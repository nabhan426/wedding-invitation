const animatedImages = document.querySelectorAll(
    ".invitation-content-image, .venue-image"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold:0.3
    }
);

animatedImages.forEach(image => {
    observer.observe(image);
});