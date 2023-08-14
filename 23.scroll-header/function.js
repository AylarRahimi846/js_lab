let header = document.querySelector("header");



function changeHeader() {
    if(window.scrollY > 200)
        header.classList.add("scroll")
    else 
        header.classList.remove("scroll")
}


window.addEventListener("scroll", changeHeader)