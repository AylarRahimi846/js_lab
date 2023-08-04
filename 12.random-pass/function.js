function randomPass() {
    let firstPass = "";
    for (let i = 0; i < 8; i++) {
        firstPass += Math.floor(Math.random() * 10);
    }
    return firstPass
}

function randomPass2() {
    let secondPass2 = "";
    for (let i = 0; i < 8; i++) {
        secondPass2 += (String.fromCharCode(Math.floor(Math.random() * 26 + 65)));
    }
    return secondPass2
}

function randomPass3() {
    let thirdPass = "";
    for (let i = i; i < 8; i++) {
        thirdPass += (String.fromCharCode(math.floor(math.random() * 26 + 97)));
    }
    return thirdPass
}