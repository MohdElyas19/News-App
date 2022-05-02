// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let appendBody = document.getElementById("detailed_news")
let curr_news = JSON.parse(localStorage.getItem("news"));

curr_news.forEach(function(el){
    let image = document.createElement("img")
    image.src = el.img;

    let title = document.createElement("h3")
    title.innerText = el.title;

    let des = document.createElement("p")
    des.innerText = el.des;

    div.append(image,title,des);
    appendBody.append(div);

})