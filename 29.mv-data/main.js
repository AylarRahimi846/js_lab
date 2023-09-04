
let section= document.querySelector("section");

const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.ir/users");



function getData() {
    let data = JSON.parse(request.responseText)
    render(data);
}



function render(list) {
    const template = list.map(user => {
        const{ avatar , name , email , phone , website , company} = user;
        const{ country , city , street , alley , number} = user.address;
        return ` <div class="section__card">
        <img class="section__card__img" src="${avatar}" alt="">
        <div class="section__card__information">
          <h1 class="section__card__information--name">نام : ${name}</h1>
          <h2 class="section__card__information--phoneNumber">شماره تلفن : ${phone}</h2>
          <h3 class="section__card__information--email">ایمیل : ${email}</h3>
          <h3 class="section__card__information--homeAddress">آدرس : ${country} , ${city} , ${street} , ${alley} , پلاک${number}</h3>
          <h4 class="section__card__information--company">شرکت : ${company}</h4>
          <h4 class="section__card__information--website">وبسایت : ${website}</h4>
        </div>
    </div>`
    });
    section.innerHTML = template.join("");


}


request.addEventListener("load", getData);
request.send();
