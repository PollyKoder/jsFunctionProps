//import { genderP } from "./js/personalia.js";

//genderP();

import { generatePersonalia } from "./js/personalia.js"; 

generatePersonalia();
//console.log(generatePersonalia);

import { generateStrength } from "./js/strength.js";

generateStrength();


//How to connect this to be triggered by the button being clicked? if/else or boolean prehaps? does it need an addEvent or onclick as well?
function displayCharacter() {
    const characterGenerated = document.querySelector("#divParent");

    //I'd like these different types of character information to be tied to their given divs, while the h1 is tied to the parentDiv
    //Figure out how! Maybe an if/else statemtn  is needed here?
    return `
        <h1>Character Details</h1>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Pronouns:</strong> ${character.pronouns}</p>
    `

}