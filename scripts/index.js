// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in";
const container = document.getElementById("news");

fetch(url)
.then(function(res){
    return res.json();
})
.then(function (res){
    // console.log(res.articles)
    appendData(res.articles);
})
.catch(function(err){
    console.log(err);
})

function appendData(data){
    data.forEach(function(el){
        let div1 = document.createElement("div");
        div1.setAttribute("id","box");

        let div2 = document.createElement("div");
        let div3 = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.urlToImage;
        image.setAttribute("id","img");

        let title = document.createElement("h3");
        title.innerText = el.title;

        let des = document.createElement("p");
        des.innerText = el.description;

        div2.append(image);
        div3.append(title,des);
        div1.append(div2,div3);
        container.append(div1);
    })
}

let twet =  document.getElementById("results");

let id;

async function search_news(){
    try{
        const srch = document.getElementById("search_input").value;
        const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${srch}`)
        const data = await res.json();
        const newsData = data.articles;
        return newsData;
    }catch(err){
        console.log(err);
    }
}

function appendNews(data){
    twet.innerHTML = null;
    data.forEach(function(el){

        let div1 = document.createElement("div");
        div1.setAttribute("id","box");

        let div2 = document.createElement("div");
        let div3 = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.urlToImage;
        image.setAttribute("id","img");

        let title = document.createElement("h3");
        title.innerText = el.title;

        let des = document.createElement("p");
        des.innerText = el.description;

        div2.append(image);
        div3.append(title,des);
        div1.append(div2,div3);
        twet.append(div1);
    })
}

async function main(){
    let data = await search_news();
    appendNews(data);

}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay); 
}