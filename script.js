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