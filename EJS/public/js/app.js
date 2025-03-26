const images = document.querySelectorAll("img");

for (img of images) {
    img.addEventListener("click", () => {
        console.log("Image was clicked.")
    })
}