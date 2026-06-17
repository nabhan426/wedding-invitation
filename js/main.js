const invitationImage = document.querySelector(
    ".invitation-content-image"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                invitationImage.classList.add("show");

            }

        });

    },
    {
        threshold:0.3
    }
);

observer.observe(invitationImage);