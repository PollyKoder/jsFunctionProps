//import { genderP } from "./js/personalia.js";

//genderP();

import { generatePersonalia } from "./js/personalia.js"; 

generatePersonalia();
//console.log(generatePersonalia);

import { generateStrength } from "./js/strength.js";

generateStrength();

import { generateTrivia } from "./js/trivia.js"

generateTrivia();


//How to connect this to be triggered by the button being clicked? if/else or boolean prehaps? does it need an addEvent or onclick as well?
function displayCharacter() {
    let characterP = generatePersonalia();
    let characterS = generateStrength();
    let characterT = generateTrivia();
    const characterGenerated = document.querySelector("#divParent");
    console.log(displayCharacter);
    //I'd like these different types of character information to be tied to their given divs, while the h1 is tied to the parentDiv
    //Figure out how! Maybe an if/else statement  is needed here?
    let personaliaOutput =  `
        <h2>Character Details</h2>
        <h3>Personalia</h3>
        <p><strong>Gender:</strong> ${characterP.gender}</p>
        <p><strong>Pronouns:</strong> ${characterP.pronouns}</p>
        <p><strong>Age:</strong> ${characterP.age}</p>
        <p><strong>Race:</strong> ${characterP.race}</p>
        <p><strong>Origin:</strong> ${characterP.origin}</p>
        <p><strong>Sexuality:</strong> ${characterP.sexuality}</p>

        <h3>Strength</h3>
        <p><strong>Stamina:</strong> ${characterS.stamina}</p>
        <p><strong>Health:</strong> ${characterS.health}</p>
        <p><strong>Trait:</strong> ${characterS.trait}</p>
        <p><strong>Bonus:</strong> ${characterS.bonus}</p>

        <h3>Trivia</h3>
        <p><strong>Hair Color:</strong> ${characterT.hairColour}</p>
        <p><strong>Hair Cut:</strong> ${characterT.hairCut}</p>
        <p><strong>Hobby:</strong> ${characterT.hobby}</p>
        <p><strong>Favorite Genre:</strong> ${characterT.favGenre}</p>
        <p><strong>Favorite Plant:</strong> ${characterT.favPlant}</p>
        <p><strong>Drink of choice:</strong> ${characterT.drink}</p>
    `
    ;
    characterGenerated.innerHTML = personaliaOutput;
 }

const eventButton = document.getElementById("buttonC");

eventButton.addEventListener("click", displayCharacter);


//document.addEventListener('DOMContentLoaded', () => {
    // const eventButton = document.getElementById("buttonC");
    // const characterGenerated = document.getElementById("divParent");

    // eventButton.addEventListener("click", () => {
    //     const newCharacterPerson = generatePersonalia();
    //     characterGenerated.innerHTML = displayCharacter();
    // });