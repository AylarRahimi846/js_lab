let length = prompt('please enter a length');
let width = prompt('please enter a width');
let enviroment = (2*length+2*width);
let area = (length * width);
    
if(length == width){
    console.log(area)
}

if(length>width || width>length){
    console.log(enviroment)
}