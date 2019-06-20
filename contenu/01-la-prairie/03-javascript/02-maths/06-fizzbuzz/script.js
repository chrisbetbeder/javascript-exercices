/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    //Si nombre entre 1 et 100 
    //si le nombre est multiple de 3 afficher fizz

    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + "FizzBuzz");

        }

        //si le nombre est multiple de 5 afficher buzz
        else if (i % 5 === 0) {
            console.log(i + "Buzz");
        }

        //si le nombre est multiple de 3 ET 5 affiche fizzbuz
        else if (i % 3 === 0) {
            console.log(i + "Fizz");
        }

        // afficher le nombre si auncun cas ne correspond
        else {
            console.log(i);
        }


    }

})();