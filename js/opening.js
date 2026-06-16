let opened = false;

document.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    document
        .querySelector(".opening-screen")
        .classList.add("open");

});