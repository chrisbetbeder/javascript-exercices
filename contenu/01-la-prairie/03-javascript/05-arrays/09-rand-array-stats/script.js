/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        // tableau de 10 nombres entre 1 et 100
        var array = [];

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }


        // créer une boucle ou les valeurs de 1 a 100 sont dedans, et on doit les push dans le tableau

        for (var i = 1; i <= 10; i++) {

            array.push(getRandomInt(1, 100));
            //prendre chaque case du tableau et ajouter 1 pour passer d'une à l'autre. Aller dans le tableau et ajouter la variable i -1
            document.getElementById("n-" + i).innerHTML = array[i - 1]; //-1 car le tableau commence à zéro
        }
        console.log(array)

        //afficher dans la liste les caractéristiques des nombres

        //le plus petit nombre


        //attribuer la plus petite valeur dans la liste
        document.getElementById("min").innerHTML = Math.min(...array);

        //attribuer la plus grande valeur dans la liste
        document.getElementById("max").innerHTML = Math.max(...array);

        //attribuer la somme des nombres dans la liste
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        var a = array.reduce(reducer);
        document.getElementById("sum").innerHTML = a;

        //attribuer la moyenne de toutes les sommes
        //prendre la somme diviser par le nombre de données
        document.getElementById("average").innerHTML = a / array.length;

    });
})();