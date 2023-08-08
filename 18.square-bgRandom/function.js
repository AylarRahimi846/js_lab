// dom nodes
let squars = document.querySelectorAll(".section__square");
console.log(squars)



// functions
function changeBackground(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
this.style.backgroundColor='rgb('+red +','+green +','+blue +')';
   
}

// events
for (let index = 0; index < squars.length; index++) {
 squars[index].onclick=changeBackground;
    
}