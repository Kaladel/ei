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
searchBtn.addEventListener("click", function(){
    searchBtn.classList.toggle("active")
    searchLabel.classList.toggle("active")
    searchInput.classList.toggle("active")
    //j'aimerai aussi ajouter un placeholder dans l'input
    //searchInput.innerHTML = 'Entrez votre recherche';
}) 

//Reprend tous les li d'activité pour en faire un array
let screens = document.querySelectorAll(".visit_element");

//écoute le mouvement de la fenêtre
window.addEventListener("mouseover", function(){
    //on dit que pour chaque li activité il agit sur l'écran
    screens.forEach(screen =>{
        screen.addEventListener("click", function(){
            let topEl = screen.offsetTop;
            window.scrollTo({top:topEl})
        })
        })
})

//https://cepegra.yo.fr/kazan_api/
//cdnjs axios
//https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js
/*
const Main = function () {
      axios.get(url)
      .then(response => {
          XXXX = response.data
      })
      .then(Affiche)
      .catch(function() {
          alert('erreur de connexion')
      })
  }
window.addEventlistener("load", Main)
*/


let allRequireds = document.querySelectorAll("[required]")
let btn = document.querySelector("input[disabled]")
//console.log(allRequireds)
let test = true

allRequireds.forEach(required => {
    required.addEventListener("change", function() {
        //alert('test')
        // test des autres champs
        // impossible de faire un break sur foreach => for
        for (let i = 0; i < allRequireds.length; i++) {
            let theField = allRequireds[i] //recupération d'un champ
            
            if ( theField.value == '') // si la valeur est vide
            {
                test = false
                break //sortir de la boucle
            }
            else if (theField.type == 'email') { //si pas vide mais email
                //alert('email')
                let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ //pattern
                if (!expressionReguliere.test(theField.value)) { //si value différent du pattern
                    test = false
                    break //sortir boucle
                }

            }
            else { //value ok
                test = true
            }
        }

        if ( test == true) { 
            btn.removeAttribute('disabled') //active le btn en retirant attriut desabled
        }
        else {
            btn.setAttribute('disabled', true) // désactive le btn en ajoutant l'attribut desabled
        }
        //  console.log(test)
    })
});
    