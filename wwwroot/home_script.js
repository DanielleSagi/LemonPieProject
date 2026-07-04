document.addEventListener("DOMContentLoaded", () => {
    const revealLink = document.getElementById("revealLink");
    const imageContainerLink = document.getElementById("imageContainerLink");

    const revealButton = document.getElementById("revealButton");
    const imageContainerButton = document.getElementById("imageContainerButton");

    revealLink.addEventListener("click", () => {
        imageContainerLink.classList.remove("hidden-div");        
    });

    revealButton.addEventListener("click", () => {
        imageContainerButton.classList.remove("hidden-div");
    });
});
