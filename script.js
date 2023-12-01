let country = 'Germany';
console.log(country);
let continent = 'Europe';
console.log(continent);
let population = 83.2;
console.log(population);
let isIsland = false;
console.log(isIsland);
let countryDescription = `${country} is located in ${continent}, ${population} million people live there.`;
console.log(countryDescription);


let weightSarah = 65;
let weightBob = 93;
let heightSarah = 1.75;
let heightBob = 1.89;
let sarahBMI = weightSarah / Math.pow(heightSarah, 2);
let bobBMI = weightBob / Math.pow(heightBob, 2);
if (sarahBMI < 18.5) {
    console.log('У Сары недостаточный вес');
} 
else if (sarahBMI >= 18.5 && sarahBMI <= 25) {
    console.log('У Сары нормальный вес');
}
if (bobBMI < 18.5 || bobBMI > 25) {
    console.log('У Боба недостаточный или избыточный вес');
} else {
    console.log('У Боба нормальный вес');
}


let number = 13;
number % 2 == 0 ? console.log(true) : console.log(false);

let isLoggedIn = true;
isLoggedIn ? console.log('logged in') : console.log('logged out');

let price = 18.3;
let count = 21;
let available = true;
available ? console.log(price * count) : console.log('Товара на складе нет');

const currentYear = new Date().getFullYear();
(currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0) ? console.log('Высокосный год') : console.log('Не высокосный год');

let countryCode = 'UK';
switch (countryCode) {
    case 'MD':
        console.log('Moldova');
        break;
    case 'US':
        console.log('United States');
        break;
    case 'CA':
        console.log('Canada');
        break;
    case 'UK':
        console.log('United Kingdom');
        break;
    case 'FR':
        console.log('France');
        break;
    default:
        console.log('Unknown Country');
}

let testPoints = 73;
switch (true) {
    case testPoints > 90:
        console.log('A');
        break;
    case testPoints > 70:
        console.log('B');
        break;
    case testPoints > 50:
        console.log('C');
        break;
    case testPoints > 30:
        console.log('D');
        break;
    case testPoints > 10:
        console.log('E');
        break;
    default:
        console.log('F');
}

function tellFortune (n, z, y, x) {
    console.log(`You will be ${x} in ${y}, and will get married to ${z} with ${n} kids`);
    }
tellFortune (1, `Pol`, `US`, `a Lawyer`);
tellFortune (2, `Chris`, `UK`, `an Artist`);
tellFortune (3, `Bob`, `Germany`, `a Photographer`);

function CalculatedDogAge (age) {
    let dogAge = age * 7;
    console.log(`Вашей собачке ${dogAge} лет в собачьих годах!`);
}
CalculatedDogAge (7);
CalculatedDogAge(2);
CalculatedDogAge (4);