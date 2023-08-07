function random(a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}

function randomBackground(){
    let img=document.querySelector("body");

    if(random(0,5)===0){
        img.setAttribute("style","background-image:url(./image/download.jfif); background-size: cover;")
    }

    if(random(0,5)===1){
        img.setAttribute("style","background-image:url(./image/download\ \(1\).jfif); background-size: cover;")
    }

    if(random(0,5)===2){
        img.setAttribute("style","background-image:url(./image/images.jfif); background-size: cover;")
    }

    if(random(0,5)===3){
        img.setAttribute("style","background-image:url(./image/images\ \(1\).jfif); background-size: cover;")
    }
   
}
document.write(randomBackground())