//character info like: current hair color, main hobby, favorite show/book, fav flower, Coffee or Tea

let hairColour = ["Black", "Brown", "White", "Ginger", "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Ranbow"];
let hairCut = ["Long hair", "Buzz-cut", "Bob-cut", "Shoulder-length"];
let hobby = ["Painting", "Drawing", "Sewing", "Knitting", "Reading", "Adventure Hikes", "Games", "Cooking", "Cosplay"];
let favGenre = ["Fantasy", "Sci-fi", "Historical", "Fiction", "Non-fiction", "Horror", "Thriller", "Comedy", "Romance"];
// let currentBookMovie = []
let favPlant = ["Blood Oak", "Orchid", "Sakura", "Lavender", "Jasmine", "Daisy", "Lilacs", "Roses", "Lily"];
let drink = ["Coffe", "Tea", "Chai", "Water", "Soda", "Juice", "Milk"];


function generateTrivia() {
    const getRandomTrivia  = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    let selectHair = getRandomTrivia(hairColour);
    let selectCut = getRandomTrivia(hairCut);
    let selectHobby = getRandomTrivia(hobby);
    let selectGenre = getRandomTrivia(favGenre);
    let selectPlant = getRandomTrivia(favPlant);
    let selectDrink = getRandomTrivia(drink);


    return {
        hairColour: selectHair,
        hairCut: selectCut,
        hobby: selectHobby,
        favGenre: selectGenre,
        favPlant: selectPlant,
        drink: selectDrink
    }
};

export {generateTrivia};

