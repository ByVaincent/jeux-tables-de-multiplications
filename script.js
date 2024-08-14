//Importation des tables

import {tableDeCinq, tableDeDeux, tableDeDix, tableDeHuit, tableDeNeuf, tableDeQuatre, tableDeSept, tableDeSix, tableDeTrois, tableDeUn} from './donnees.js';



// choix au hasard d'une table de multiplication

const toutesTables = [tableDeUn, tableDeDeux, tableDeTrois, tableDeQuatre, tableDeCinq, tableDeSix, tableDeSept, tableDeHuit, tableDeNeuf, tableDeDix,];

const tableRandom = toutesTables[(Math.floor((Math.random())*10))];

// Création de la var de score

let score = 0;
let nombreDeJeu = 0;


//Création des variables des tables
const tableDeUnElement = document.getElementById("table-1");
const tableDeDeuxElement = document.getElementById("table-2");
const tableDeTroisElement = document.getElementById("table-3");
const tableDeQuatreElement = document.getElementById("table-4");
const tableDeCinqElement = document.getElementById("table-5");
const tableDeSixElement = document.getElementById("table-6");
const tableDeSeptElement = document.getElementById("table-7");
const tableDeHuitElement = document.getElementById("table-8");
const tableDeNeufElement = document.getElementById("table-9");
const tableDeDixElement = document.getElementById("table-10");
const tableRandomElement = document.getElementById("table-random");

// Création des constantes d'éléments

const accueilElement = document.getElementById("accueil");
const jeuElement = document.getElementById("jeu");
const affichageTableElement = document.getElementById("table-en-jeu")
const affichageMultiplicationElement = document.getElementById("multiplication");

const form = document.querySelector("form");
const inputNumber = document.getElementById('reponse');
const inputSubmit = document.querySelector('input[type="submit"]');

    //Boutons de nav
const retourChoixTablesElement = document.getElementById("nav-choix-tables");
const finDuJeuElement = document.getElementById("nav-fin-du-jeu");
const questionSuivante = document.getElementById("question-suivante");

    // score
const scoreElement = document.getElementById("score")

//fonctions

    //Affichage du jeu
function affichageJeu () {
    accueilElement.classList.toggle("affichage-off")
    jeuElement.classList.toggle("affichage-off")
};


    //Générateur random de question dans la table choisie et affihage 
function jeu (table) {

        //Générateur de question et affichage de la question
    let multiplication = table[(Math.floor(Math.random()*10) + 1)];
    
    if (multiplication.substring(0, 2) === '10') {

        const multiplicationAffichage = multiplication.substring(0, 2) + "x" + multiplication.substring(3, 4);
        affichageMultiplicationElement.innerText = multiplicationAffichage;
    } else {

        const multiplicationAffichage = multiplication.substring(0, 1) + "x" + multiplication.substring(2, 3);
        affichageMultiplicationElement.innerText = multiplicationAffichage;
    }
        const resultat = form.addEventListener('submit', (event) => {

            event.preventDefault();

            //Récupération de la reponse
            const reponseElement = document.getElementById("reponse");
            const reponse = reponseElement.value


            //Traitement de la réponse

            const resultatJuste = parseInt(multiplication);
            
            if (parseInt(reponse) === resultatJuste) {

                //Affichage du message de félicitation
                const affichageFelicitation = document.createElement("div");
                affichageFelicitation.innerText = "Bravo! C'était la bonne réponse!";
                const divNavElement = document.getElementById("nav");
                divNavElement.insertAdjacentElement('beforebegin', affichageFelicitation);

               

                score++
                nombreDeJeu++

            } else {
                
                //Affichage du message de réponse fausse
                const affichageFelicitation = document.createElement("div");
                affichageFelicitation.innerText = "Dommage! La bonne réponse était: " + resultatJuste;

                const divNavElement = document.getElementById("nav");

                divNavElement.insertAdjacentElement('beforebegin', affichageFelicitation);

                nombreDeJeu++
            }

             //Blocage du champs input
             inputNumber.autofocus = !inputNumber.autofocus;
             inputNumber.disabled = !inputNumber.disabled;

             inputSubmit.disabled = !inputSubmit.disabled;

            scoreElement.innerText = score + '/' + nombreDeJeu;
        })  
}


// Démarrage du jeu en fonction de la table choisie
tableDeUnElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 1;
    jeu(tableDeUn);

});


// Navigation

retourChoixTablesElement.addEventListener('click', affichageJeu)








// Affichage du score



console.log(nombreDeJeu)
console.log(score)
