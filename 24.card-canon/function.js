

const CARD = {
    title: "دوربین دیجیتال کانن مدل EOS 90D ",
    price: 64400000,
    imageUrl: "./img/canon.webp",
    rate: 4.4,
}

let img = document.querySelector("img");
let title = document.querySelector("h1");
let price = document.querySelector("h2");
let rate = document.querySelector("p");

img.setAttribute("src", CARD.imageUrl);
title.textContent = "مدل : " + CARD.title;
price.textContent = "قیمت : " + CARD.price + " " + "تومان";
rate.textContent = "امتیاز : " + CARD.rate;
