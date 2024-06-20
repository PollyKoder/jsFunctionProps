//Character info: Gender, pronouns, age, race, origin/birthplace and sexuality

//let gender = ["Female", "Male", "Trans-Female", "TransMale", "Non-Binary"];
//let pronouns = ["She/her", "He/Him", "They/Them", "She/They", "She/Them", "He/They", "He/Them", "She/He/Them"];
//let age = ["10", "13", "15", "18", "20", "23", "28", "33", "38"];
//let race = ["Black", "Asian", "Hispanic", "Caucasian", "Native American", "Native Alaskan", "Pacific Islander"];
//let origin = ["African", "North-African", "South-African", "Asian", "Antarctica", "American", "North-American", "South-American", "European"];
//let sexuality = ["Hetero", "Gay", "Bi", "Pan", "Demi", "Ace", "2/Two-Spirit", "Queer", "Questioning"];


//Was about to test some ideas, when I got the Chat GPT suggestion:
//function genderP() {
    //console.log(gender[(Math.floor(Math.random() * gender.length))]);
// return Math
    
//}
//export {genderP};



//Trying to adjust the Chat GPT code abd understand it piece by piece:
function generatePersonalia() {
    let gender = ["Female", "Male", "Trans-Female", "TransMale", "Non-Binary"];
    let pronouns = ["She/her", "He/Him", "They/Them", "She/They", "She/Them", "He/They", "He/Them", "She/He/Them"];
    let age = ["10", "13", "15", "18", "20", "23", "28", "33", "38"];
    let race = ["Black", "Asian", "Hispanic", "Caucasian", "Native American", "Native Alaskan", "Pacific Islander"];
    let origin = ["African", "North-African", "South-African", "Asian", "Antarctica", "American", "North-American", "South-American", "European"];
    let sexuality = ["Hetero", "Gay", "Bi", "Pan", "Demi", "Ace", "2/Two-Spirit", "Queer", "Questioning"];

    const getRandomPersonalia = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    //I mostly feel like I'm copying the code at this point, but am trying to make some changes, with the other js files in mind
    //Randomly selected attributes
    let selectGender = getRandomPersonalia(gender);
    let selectPronouns = getRandomPersonalia(pronouns);




    //Create and return the character object
    return {
        gender: selectGender,
        pronouns: selectPronouns
    };
}

const newCharacter = generatePersonalia();
console.log(newCharacter);