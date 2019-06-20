/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        // recupérer année de l'utilisateur
        var anneeUser = parseInt(document.getElementById("year").value);


        //taleau pour stocker les vendredi13 existant
        var les_vendredis13 = [];


        //Boucle for allant de 1 à 12
        for (let index = 1; index < 12; index++) {
            //generer une date année/mois/13
            var d1 = new Date(anneeUser, index, 13);
            //si c'est un vendredi ça l'ajoute au tableau
            if (d1.getDay() == 5) {
                les_vendredis13.push(d1);
            }

        }

        alert(les_vendredis13);








    });



})();