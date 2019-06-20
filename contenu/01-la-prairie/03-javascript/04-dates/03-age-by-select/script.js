/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


// mettre le document. l'id du bouton; et le fonction du click
//()=>{
// ajouter chaque variables qui composent l'anniversaire avec le document, l'id de la valeur et la valeur
//ajouter la variable anniversaire avec l'objet date et les composants
//ajouter la variable date actuelle avec l'objet date
//faire que la variable age coincide avec l'année actuelle et la date de naissance 

// }

document.getElementById("run").addEventListener("click");
() => {

    var annee = document.getElementById("dob-year").value;
    var mois = document.getElementById("dob-month").value;
    var jour = document.getElementById("dob-day").value;

    var anniversaire = new Data(annee, mois, jour);
    var today = new Date();
    var age = today.getFullYear() - anniversaire.getFullYear();
    alert(age);
}




});

// function calcul_age(jour, mois, année) {
//     var jour = document.getElementById(dob - day);
//     var mois = document.getElementById(dob - month);
//     var année = document.getElementById(dob - year);


//     var date_day = new Date();
//     var anniversaire = prompt("Vous avez :" + annee, mois, jour);
//     alert(anniversaire);
// }
})();



//  document.getElementById("run").addEventListener("click",
//     () => {
//         var jour = document.getElementById("dob-day").value;


//         var mois = document.getElementById("dob-month").value;


//         var annee = document.getElementById("dob-year").value;

//         var anniversaire = new Date(annee, mois, jour);
//         //alert(anniversaire);

//         var today = new Date();
//         //alert(today);

//         var age = today.getFullYear() - anniversaire.getFullYear();
//         alert(age); 