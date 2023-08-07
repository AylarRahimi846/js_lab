let flag = true

function bgToggle() {
    let body = document.querySelector("body")
    let btn = document.querySelector("button")

    if (flag === true) {
        body.style.backgroundColor = "#1a73e8"
        btn.textContent = "TURN OFF"

        flag = false
    } else {
        body.style.backgroundColor = "#05234a"
        btn.textContent = "TURN ON"

        flag = true
    }
}