/*Exercice 11:
Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, 
et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres :
Entrez le nombre numéro 1 : 12
Entrez le nombre numéro 2 : 14
etc. ..
Entrez le nombre numéro 20 : 6
Le plus grand de ces nombres est : 14
Modifiez ensuite l’algorithme pour que le programme affiche de surcroît 
en quelle position avait été saisie ce nombre :
C’était le nombre numéro 2*/

/*
let iNombres_1 = parseInt(prompt("Entrer le nombre N°1"));
let iNombres_2 = parseInt(prompt("Entrer le nombre N°2"));
let iNombres_3 = parseInt(prompt("Entrer le nombre N°3"));
let iNombres_4 = parseInt(prompt("Entrer le nombre N°4"));
let iNombres_5 = parseInt(prompt("Entrer le nombre N°5"));
let iNombres_6 = parseInt(prompt("Entrer le nombre N°6"));
let iNombres_7 = parseInt(prompt("Entrer le nombre N°7"));
let iNombres_8 = parseInt(prompt("Entrer le nombre N°8"));
let iNombres_9 = parseInt(prompt("Entrer le nombre N°9"));
let iNombres_10 = parseInt(prompt("Entrer le nombre N°10"));
let iNombres_11 = parseInt(prompt("Entrer le nombre N°11"));
let iNombres_12 = parseInt(prompt("Entrer le nombre N°12"));
let iNombres_13 = parseInt(prompt("Entrer le nombre N°13"));
let iNombres_14 = parseInt(prompt("Entrer le nombre N°14"));
let iNombres_15 = parseInt(prompt("Entrer le nombre N°15"));
let iNombres_16 = parseInt(prompt("Entrer le nombre N°16"));
let iNombres_17 = parseInt(prompt("Entrer le nombre N°17"));
let iNombres_18 = parseInt(prompt("Entrer le nombre N°18"));
let iNombres_19 = parseInt(prompt("Entrer le nombre N°19"));
let iNombres_20 = parseInt(prompt("Entrer le nombre N°20"));
let iTableau = [iNombres_1, iNombres_2, iNombres_3, iNombres_4,
  iNombres_5, iNombres_6, iNombres_7, iNombres_8, iNombres_9,
  iNombres_10, iNombres_11, iNombres_12, iNombres_13, iNombres_14,
  iNombres_15, iNombres_16, iNombres_17, iNombres_18, iNombres_19,
  iNombres_20];
console.log(iTableau);
alert(iNombres_10," "+iNombres_2," "+iNombres_3," "+iNombres_4," "+iNombres_5,
" "+iNombres_6," "+iNombres_7," "+iNombres_8," "+iNombres_9," "+iNombres_10,
"\n "+iNombres_11," "+iNombres_12,"",+""+""+,+,+,+,+,+,+,+,+++++++)  */


/*


CORRECTION GUILLAUME
*/

/*Exemples d’u􏰀lisa􏰀on en codant les fonc􏰀onnalités JS :
Filtrer les personnages Jedi :*/
function filtrerParAffiliation(affiliation, tableau) { const resultats = [];
for (let i = 0; i < tableau.length; i++) {
if (tableau[i].affiliation === affiliation) {
resultats.push(tableau[i]); }
}
    return resultats;
}
const personnagesJedi = filtrerParAffiliation("Jedi", personnages); console.log(personnagesJedi);
Trouver un personnage par son nom (ex: "Luke Skywalker") :
function trouverParNom(nom, tableau) { for (let i =
if (tableau[i].nom === nom) {
            return tableau[i];
        }
}
    return null;
}
const personnageLuke = trouverParNom("Luke Skywalker", personnages); console.log(personnageLuke);
0
; i < tableau.length; i++) {
Calculer le nombre total de personnages :
Vérifier si un personnage est présent dans le tableau (ex: "Yoda") :
function calculerNombreTotal(tableau) { let total = 0;
for (let i = 0; i < tableau.length; i++) {
total++; }
    return total;
}
const nombreTotalPersonnages = calculerNombreTotal(personnages); console.log(nombreTotalPersonnages);
function estPresentDansTableau(nom, tableau) { for (let i = 0; i < tableau.length; i++) {
if (tableau[i].nom === nom) {
            return true;
        }
}
    return false;
}
const estPresent = estPresentDansTableau("Yoda", personnages);
console.log(estPresent ? "Yoda est présent dans le tableau." : "Yoda n'est pas présent dans le tableau.");
Exemples d'u􏰀lisa􏰀on des méthodes en u􏰀lisant une fonc􏰀on na􏰀ve JS:
Filtrer les personnages Jedi :
Trouver un personnage par son nom (ex: "Luke Skywalker") :
Calculer le nombre total de personnages :
Vérifier si un personnage est présent dans le tableau (ex: "Yoda") :
const personnagesJedi = personnages.filter(personnage => personnage.affiliation === "Jedi");
console.log(personnagesJedi);
 const personnageLuke = personnages.find(personnage => personnage.nom === "Luke Skywalker");
console.log(personnageLuke);
 const nombreTotalPersonnages = personnages.length; console.log(nombreTotalPersonnages);
 const estPresent = personnages.some(personnage => personnage.nom === "Yoda"); console.log(estPresent ? "Yoda est présent dans le tableau." : "Yoda n'est pas présent dans le tableau.");
 