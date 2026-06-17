let opened = false;

// Disable scrolling initially
document.body.classList.add("lock-scroll");

document.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    document
        .querySelector(".opening-screen")
        .classList.add("open");

    // Re-enable scrolling after envelope animation
    setTimeout(() => {
        document.body.classList.remove("lock-scroll");
    }, 0);

});