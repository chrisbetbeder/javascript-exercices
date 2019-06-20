/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        var bouton = true;
        while (bouton) {
            var age = prompt("Quel âge avez vous?");
            var sexe = prompt("Votre sexe?");
            var ville = prompt("Votre ville ?");

            if (confirm(age + sexe + ville)) {
                bouton = false;
            } else {}
        }
    }

)();