/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ]);

    // bouton cliquable
    document.getElementById("run").addEventListener("click", () => {

        //modifier la composition du tableau


        /* fruits.entries().splice(0, 1, 'banane'); */
        //fruits.splice(-2, 1, 'kiwi');

        //fruits[0] = "banane";
        //fruits[fruits.length - 1] = "kiwi";


        // afficher en console.log

        fruits.delete("pomme");
        fruits.delete("cerise");
        fruits.add("banane");
        fruits.add("kiwi");



        console.log(fruits);

    });
})();