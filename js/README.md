Used this README to store Chat GPT reply as to how I can make a decent and functional code.

# Chat gpt1:

function generateCharacter() {
    let gender = ["Female", "Male", "Trans-Female", "Trans-Male", "Non-Binary"];
    let pronouns = ["She/her", "He/Him", "They/Them", "She/They", "She/Them", "He/They", "He/Them", "She/He/Them"];
    let age = ["10", "13", "15", "18", "20", "23", "28", "33", "38"];
    let race = ["Black", "Asian", "Hispanic", "Caucasian", "Native American", "Native Alaskan", "Pacific Islander"];
    let origin = ["African", "North-African", "South-African", "Asian", "Antarctica", "American", "North-American", "South-American", "European"];
    let sexuality = ["Hetero", "Gay", "Bi", "Pan", "Demi", "Ace", "Queer"];

    const getRandomItem = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Randomly select attributes
    let selectedGender = getRandomItem(gender);
    let selectedPronouns = getRandomItem(pronouns);
    let selectedAge = getRandomItem(age);
    let selectedRace = getRandomItem(race);
    let selectedOrigin = getRandomItem(origin);
    let selectedSexuality = getRandomItem(sexuality);

    // Create and return the character object
    return {
        gender: selectedGender,
        pronouns: selectedPronouns,
        age: selectedAge,
        race: selectedRace,
        origin: selectedOrigin,
        sexuality: selectedSexuality
    };
}

// Example of how to use the function
const newCharacter = generateCharacter();
console.log(newCharacter);

// If you want to display the character as HTML:
function displayCharacter(character) {
    return `
        <h1>Character Details</h1>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Pronouns:</strong> ${character.pronouns}</p>
        <p><strong>Age:</strong> ${character.age}</p>
        <p><strong>Race:</strong> ${character.race}</p>
        <p><strong>Origin:</strong> ${character.origin}</p>
        <p><strong>Sexuality:</strong> ${character.sexuality}</p>
    `;
}

// Example of how to use the display function
document.body.innerHTML = displayCharacter(newCharacter);




# Chat gpt2 (with js modules);
- First, create a module for generating characters and exporting the function:

// characterGenerator.js
export function generateCharacter() {
    let gender = ["Female", "Male", "Trans-Female", "Trans-Male", "Non-Binary"];
    let pronouns = ["She/her", "He/Him", "They/Them", "She/They", "She/Them", "He/They", "He/Them", "She/He/Them"];
    let age = ["10", "13", "15", "18", "20", "23", "28", "33", "38"];
    let race = ["Black", "Asian", "Hispanic", "Caucasian", "Native American", "Native Alaskan", "Pacific Islander"];
    let origin = ["African", "North-African", "South-African", "Asian", "Antarctica", "American", "North-American", "South-American", "European"];
    let sexuality = ["Hetero", "Gay", "Bi", "Pan", "Demi", "Ace", "Queer"];

    const getRandomItem = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Randomly select attributes
    let selectedGender = getRandomItem(gender);
    let selectedPronouns = getRandomItem(pronouns);
    let selectedAge = getRandomItem(age);
    let selectedRace = getRandomItem(race);
    let selectedOrigin = getRandomItem(origin);
    let selectedSexuality = getRandomItem(sexuality);

    // Create and return the character object
    return {
        gender: selectedGender,
        pronouns: selectedPronouns,
        age: selectedAge,
        race: selectedRace,
        origin: selectedOrigin,
        sexuality: selectedSexuality
    };
}

- Create another module that imports the 'generateCharacter' function and sets up the button interaction:

// characterDisplay.js
import { generateCharacter } from './characterGenerator.js';

function displayCharacter(character) {
    return `
        <h1>Character Details</h1>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Pronouns:</strong> ${character.pronouns}</p>
        <p><strong>Age:</strong> ${character.age}</p>
        <p><strong>Race:</strong> ${character.race}</p>
        <p><strong>Origin:</strong> ${character.origin}</p>
        <p><strong>Sexuality:</strong> ${character.sexuality}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generateCharacterButton');
    const characterContainer = document.getElementById('characterContainer');

    button.addEventListener('click', () => {
        const newCharacter = generateCharacter();
        characterContainer.innerHTML = displayCharacter(newCharacter);
    });
});


- Create an HTML file that includes the script modules and sets up the button:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character Generator</title>
</head>
<body>
    <button id="generateCharacterButton">Generate Character</button>
    <div id="characterContainer"></div>

    <script type="module" src="./characterDisplay.js"></script>
</body>
</html>



- Explanation
1. 'characterGenerator.js:' This module defines and exports the 'generateCharacter' function.
2. 'characterDisplay.js:' This module imports the 'generateCharacter' function, defines the 'displayCharacter' function to format the character details as HTML, and sets up an event listener for the button to generate and display a new character when clicked.
3. 'index.html:' This HTML file includes the button and a container to display the character details. It imports the 'characterDisplay.js' script as a module.

When you open 'index.html' in a browser, clicking the "Generate Character" button will generate a new character and display its details in the 'characterContainer' div.