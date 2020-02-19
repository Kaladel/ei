//sélection du bloc pour l'animation
let btnBurger = document.querySelector(".animation-div")
//sélection du menu de navigation
let sectionBurger = document.querySelector(".menu_nav")
//sélection des spans pour l'animation de 3 barres en croix
let span = document.querySelectorAll(".animation-span")
//sélection du menu général
let body = document.querySelector(".menu")


//J'ajoute une écoute d'événement sur le bloc qui 
//s'occupe du menu en mobile
btnBurger.addEventListener("click", function(){
    //je lui indique de changer la classe de cache du menu de navigation
    sectionBurger.classList.toggle("hidden")
    //je lui dit que le menu doit prendre toute la place / ou pas.
    if(body.classList.contains("noscroll")){
        body.classList.remove("noscroll")
    }
    else{
        body.classList.add("noscroll")
    }
    //j'ajoute la classe crossbar pour effectuer l'animation des span
    span.forEach(element => {
        element.classList.toggle("crossbar")
    });

})    

//On tente de faire pareil qu'au-dessus
//mais avec le formulaire de recherche
//On sélectionne la loupe, le label et l'input. 
let searchBtn = document.querySelector(".fa-search")
let searchLabel = document.querySelector(".searchlabel")
let searchInput = document.querySelector(".searchinput")

//pareil qu'en haut, on écoute et on change les classes
//pour activer ou désactiver la chose
searchBtn.addEventListener("click", function(){
    searchBtn.classList.toggle("active")
    searchLabel.classList.toggle("active")
    searchInput.classList.toggle("active")
    //j'aimerai aussi ajouter un placeholder dans l'input
    //searchInput.innerHTML = 'Entrez votre recherche';
}) 


/* En attendant, je passe sur du hover en css pour 
voir si tout fonctionne correctement
//On sélectionne l'encart de la figure, tous les encarts
let visite = document.querySelectorAll(".visit_overview")
let description = document.querySelectorAll(".visit_overviw-description")

//On dit qu'on veut que pour chaque élément "visite"
visite.forEach(elem => {
    //si l'élément contient "active", on lui retire
    ev.target.addEventListener("click", function(){
        if (elem.classList.contains("active")){
        elem.classList.remove("active");
        //et on ajoute la classe active à la description
        description.classList.add("active");
        }
        else {elem.classList.add("active")}
    })
})
*/
