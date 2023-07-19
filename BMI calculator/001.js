let weight = prompt("enter your weight");
let height = prompt("enter your height");
let BMI = (weight/(height*height));

if(BMI<=18.4){
    console.log('underweight')
}

else if(BMI<24.9 && BMI>18.5){
    console.log('normal')
}

else if(25.0<BMI && BMI<39.0){
    console.log('overweight')
}

else if(BMI>=40){
    console.log('obese')
}