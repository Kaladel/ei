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
btnBurger.addEventListener("click", function () {
    //je lui indique de changer la classe de cache du menu de navigation
    sectionBurger.classList.toggle("hidden")
    //je lui dit que le menu doit prendre toute la place / ou pas.
    /*if(body.classList.contains("noscroll")){
        body.classList.remove("noscroll")
    }
    else{
        body.classList.add("noscroll")
    }*/
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
searchBtn.addEventListener("click", function () {
    searchBtn.classList.toggle("active")
    searchLabel.classList.toggle("active")
    searchInput.classList.toggle("active")
    //j'aimerai aussi ajouter un placeholder dans l'input
    //searchInput.innerHTML = 'Entrez votre recherche';
})

let liste = document.querySelector(".visits_container")


let Affiche = function () {
    //liste.innerHTML = ''
    visites.forEach(element => {
        liste.innerHTML += `<li class="visit_element ville_centre">
        <figure class="visit_overview">
              <img src="${element.img}" alt="${element.text_img}" class="visit_image">
              <figcaption>
                  <h3 class="visit_title"><strong>${element.title}</strong>${element.title2}</h3>
                  <p class="visit_location">${element.situation}</p>
              </figcaption>
          </figure>
          <div class="visit_overview-description">
              <h3 class="visit_title"><strong>${element.title}</strong>${element.title2}</h3>
              <h4 class="visit_subtitle">${element.ss_titre}</h4>
              <p class="visit_description">${element.texte}</p>
              <div>
                  <i class="fa fa-heart"></i>
                  <a href="#" title="En lire plus">Read more</a>
              </div>
              <a href="#" title="En savoir plus">...</a>
          </div>  
      </li>`
    });
    //Reprend tous les li d'activité pour en faire un array
    let screens = document.querySelectorAll(".visit_element");

    //écoute le mouvement de la fenêtre
    window.addEventListener("mouseover", function () {
        //on dit que pour chaque li activité il agit sur l'écran
        screens.forEach(screen => {
            screen.addEventListener("click", function () {
                let topEl = screen.offsetTop;
                window.scrollTo({ top: topEl })
            })
        })
    })
}
let url = "https://cepegra.yo.fr/kazan_api/"

const Main = function () {
    axios.get(url)
        .then(response => {
            visites = response.data.feed
        })
        .then(Affiche)
        .catch(function () {
            alert('erreur de connexion')
        })
}

window.addEventListener("load", Main);
