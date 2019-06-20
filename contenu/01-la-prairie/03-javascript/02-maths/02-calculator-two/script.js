/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        var premier = parseInt(document.getElementById("op-one").value);
        var deuxieme = parseInt(document.getElementById("op-two").value);


        switch (operation) {
            case "addition":
                alert("resultat :" + (premier + deuxieme));

                break;



            case "substraction":
                alert("resultat:" + (premier - deuxieme));

                break;



            case "multiplication":
                alert("resultat:" + (premier * deuxieme));

                break;



            case "division":
                alert("resultat:" + (premier / deuxieme));

                break;

            default:
                alert("un truc bidon!");

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();