//Importation des tables

import {tableDeCinq, tableDeDeux, tableDeDix, tableDeHuit, tableDeNeuf, tableDeQuatre, tableDeSept, tableDeSix, tableDeTrois, tableDeUn} from './donnees.js';
 
console.log(tableDeCinq)


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

const tables = document.querySelectorAll('.table');
// Création des constantes d'éléments

const accueilElement = document.getElementById("accueil");
const jeuElement = document.getElementById("jeu");
const affichageTableElement = document.getElementById("table-en-jeu")
const affichageMultiplicationElement = document.getElementById("multiplication");

const form = document.querySelector("form");
const inputNumber = document.getElementById('reponse');
const inputSubmit = document.querySelector('input[type="submit"]');

    //Préparation des constantes pour l'affichage du message de félicitation
    const affichageFelicitation = document.createElement("div");
    affichageFelicitation.setAttribute('id', 'message-resultat');

    const divNavElement = document.getElementById("nav");


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


// fonction du jeu
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

    console.log(multiplication)

    //Gestion du résultat
        const resultat = form.addEventListener('submit', (event) => {

            event.preventDefault();

            if(inputNumber.value){
            //Récupération de la reponse
            const reponse = inputNumber.value

            
            //Traitement de la réponse
            const multiplicationSplit = multiplication.split('*');
            const resultatJuste = parseInt(multiplicationSplit[0], 10) * parseInt(multiplicationSplit[1],10)
            console.log(resultatJuste)
            
            if (parseInt(reponse) === resultatJuste) {
                
                affichageFelicitation.innerText = "Bravo! C'était la bonne réponse!";
                divNavElement.insertAdjacentElement('beforebegin', affichageFelicitation);

                score++
                nombreDeJeu++

                scoreElement.innerText = score + '/' + nombreDeJeu;

                // //Blocage du champs input
                // inputNumber.toggleAttribute('autofocus')
                // inputNumber.toggleAttribute('disabled');
                // inputSubmit.toggleAttribute('disabled');
                

            } else {
                
                //Affichage du message de réponse fausse
                
                affichageFelicitation.innerText = "Dommage! La bonne réponse de " + multiplication + " était: " + resultatJuste;

                const divNavElement = document.getElementById("nav");

                divNavElement.insertAdjacentElement('beforebegin', affichageFelicitation);

                nombreDeJeu++

                scoreElement.innerText = score + '/' + nombreDeJeu;  

                //Blocage du champs input
                // inputNumber.toggleAttribute('autofocus')
                // inputNumber.toggleAttribute('disabled');
                // inputSubmit.toggleAttribute('disabled');

                 
            }



            
            form.reset();

            multiplication = table[(Math.floor(Math.random()*10) + 1)];
    
            if (multiplication.substring(0, 2) === '10') {

            const multiplicationAffichage = multiplication.substring(0, 2) + "x" + multiplication.substring(3, 4);
            affichageMultiplicationElement.innerText = multiplicationAffichage;
            } else {

            const multiplicationAffichage = multiplication.substring(0, 1) + "x" + multiplication.substring(2, 3);
            affichageMultiplicationElement.innerText = multiplicationAffichage;
            }
            }
        })  

}

// Démarrage du jeu en fonction de la table choisie
tableDeUnElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 1;
    jeu(tableDeUn);
});

tableDeDeuxElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 2;
    jeu(tableDeDeux);
});

tableDeTroisElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 3;
    jeu(tableDeTrois);
});

tableDeQuatreElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 4;
    jeu(tableDeQuatre);
});

tableDeCinqElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 5;
    jeu(tableDeCinq);
});

tableDeSixElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 6;
    jeu(tableDeSix);
});

tableDeSeptElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 7;
    jeu(tableDeSept);
});

tableDeHuitElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 8;
    jeu(tableDeHuit);
});

tableDeNeufElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 9;
    jeu(tableDeNeuf);
});

tableDeDixElement.addEventListener('click', () => {
    affichageJeu();
    affichageTableElement.innerText = 10;
    jeu(tableDeDix);
});

tableRandomElement.addEventListener('click', () => {
    affichageJeu();
    const numTable = tableRandom[0][2];
    affichageTableElement.innerText = numTable
    jeu(tableRandom);

})



// Navigation


finDuJeuElement.addEventListener('click', () => {
    location.reload();
});

retourChoixTablesElement.addEventListener('click',() => {
    location.reload();
})


