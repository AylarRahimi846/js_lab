let blackBoard = document.querySelector("body")




function handleEntrePressed(event) {
    if (event.keyCode === 13) {
        blackBoard.classList.add("board")
    }
}



window.addEventListener("keyup", handleEntrePressed)