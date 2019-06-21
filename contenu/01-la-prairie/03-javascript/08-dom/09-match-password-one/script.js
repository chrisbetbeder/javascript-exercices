/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //activer le clic
    document.getElementById("run").addEventListener("click", () => {

        //conditions si mot de passe différents afficher les bords de l'input en rouge
        if ("pass-one" != "pass-two") {
            document.body.style.borderColor = "red";
        }


    });
})();