function random(a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}

function randomBackground() {
    let img = document.querySelector("body");
    const randomNumber = random(0, 5);


    if (randomNumber === 0) {
        img.setAttribute("style", "background-image: url(./image/1.JPEG);")
    }

    if (randomNumber === 1) {
        img.setAttribute("style", " background-image: url(./image/2.JPEG);")
    }

    if (randomNumber === 2) {
        img.setAttribute("style", " background-image: url(./image/3.JPEG);")
    }

    if (randomNumber === 3) {
        img.setAttribute("style", "background-image: url(./image/4.JPEG);")
    }

}
    randomBackground()