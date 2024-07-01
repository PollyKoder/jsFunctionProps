//Character traits about strength: Stamina, health, personality trait(optimist, pessimist, warrior, healer, spiritual?), bonus: (ex:) stealth?

let stamina = ["20%", "40%", "60%", "80%", "100%", "150%"];
let health = ["Compromised health", "Poor health", "Average health", "Good Health", "Great Health"];
let trait = ["Pessimist", "Optimist", "Healer", "Warrior", "Spiritual", "Loyal", "Deceiving", "Honest", "Dishonest"];
let bonus = ["Stealth", "Coordinated", "Uncoordinated", "Graceful", "Graceless", "Cunning", "Secretive", "High Morals", "Low morals", "Happy", "Sad", "Indifferent"];

function generateStrength() {
    const getRandomStrength = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    let selectStamina = getRandomStrength(stamina);
    let selectHealth = getRandomStrength(health);
    let selectTrait = getRandomStrength(trait);
    let selectBonus = getRandomStrength(bonus);

    return {
        stamina: selectStamina,
        health: selectHealth,
        trait: selectTrait,
        bonus: selectBonus
    };
}

//const newCharacterStrength = generateStrength();

export {generateStrength};
//console.log(newCharacterStrength);