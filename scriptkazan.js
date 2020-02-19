let btnBurger = document.querySelector(".animation-div")
let sectionBurger = document.querySelector(".menu_nav")
let span = document.querySelectorAll(".animation-span")
let body = document.querySelector(".menu")

/*
let sectionTopNav = document.querySelector(".section_btnNav_logo")
let headerdate = document.querySelector(".header_date")
let figureArticle = document.querySelectorAll(".figure_article")
*/

btnBurger.addEventListener("click", function(){
    sectionBurger.classList.toggle("hidden")
    if(body.classList.contains("noscroll")){
        body.classList.remove("noscroll")
    }
    else{
        body.classList.add("noscroll")
    }
    span.forEach(element => {
        element.classList.toggle("crossbar")
    });

})    

let searchBtn = document.querySelector(".fa-search")
let searchLabel = document.querySelector(".searchlabel")
let searchInput = document.querySelector(".searchinput")

searchBtn.addEventListener("click", function(){
    searchLabel.classList.toggle("active")
    searchInput.classList.toggle("active")
}) 