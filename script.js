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


let fruits = [];
fruits.push("apple", "banana", "orange");
console.log(fruits.length);
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);

let colors = ["red", "green", "blue", "yellow"];
console.log(colors.indexOf("green"));
console.log("Does the 'colors' array contain 'orange'?", colors.includes("orange"));

let names = ["John", "Jane", "Mike", "Jennifer"];
names.unshift("David");
console.log(names);
console.log(names.indexOf("Mike"));

let numbers2 = [2, 4, 6, 8, 10];
const contains5 = numbers2.includes(5);
console.log(numbers2.includes(5) ? "Array includes 5" : "Array doesn't include 5");
numbers2.push(12);
console.log(numbers2);

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months.sort();
console.log(months);

console.log(months.filter(month => month.length > 3));

let selectedMonths = months.slice(5, 10);
console.log(selectedMonths);

let filteredMonths = months.filter(month => month.length >= 5);
filteredMonths.sort();
let resultString = filteredMonths.join('-');
console.log(resultString);


let fruits1 = ["apple", "banana", "orange"];
for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}

let numbers1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
}
console.log(sum);

let names1 = ["John", "Jane", "Michael", "Jennifer", "Bobby"];
let nameLengths = [];
for (let i = 0; i < names1.length; i++) {
    nameLengths.push(names1[i].length);
}
console.log(nameLengths);

let company = [
    ["John", "Jane", "Alice"],
    ["Bob", "Charlie", "David"],
    ["Eva", "Frank", "Grace"],
    ["Helen", "Henry"]
];
for (let i = 0; i < company.length; i++) {
    for (let j = 0; j < company[i].length; j++) {
        console.log(company[i][j]);
    }
}
let allEmployees = [];
for (let i = 0; i < company.length; i++) {
    for (let j = 0; j < company[i].length; j++) {
        allEmployees.push(company[i][j]);
    }
}
allEmployees.sort();
console.log(allEmployees);

function countProperties(person) {
    let propertyCount = Object.keys(person).length;
    return propertyCount;
}
let person = { firstName: "John", lastName: "Doe", age: 30, profession: "developer" };
console.log(countProperties(person));

function generateArray(n) {
    let resultArray = Array.from({ length: n + 1 }, (_, index) => index);
    return resultArray;
}
let input = 8;
console.log(generateArray(input));

function findLargestNumber(numbers) {
    let theBiggestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > theBiggestNumber) {
            theBiggestNumber = numbers[i];
        }
    }
    return theBiggestNumber;
}
const inputArray = [5, 8, 2, 10, 3];
console.log(findLargestNumber(inputArray));

function calculateGPA(grades) {
    let gradeValues = Object.values(grades);
    let sumOfGrades = gradeValues.reduce((total, grade) => total + grade, 0);
    let averageGrade = sumOfGrades / gradeValues.length;
    return averageGrade;
}
let studentGrades = { math: 8, literature: 7, history: 9 };
console.log(calculateGPA(studentGrades));

function Dog (nickname, age, color) {
    this.nickname = nickname;
    this.age = age;
    this.color = color;
}
let myDog = new Dog("Buddy", 3, "Brown");
function addPuppies(dog, numberOfPuppies) {
    dog.puppies = [];

    for (let i = 1; i <= numberOfPuppies; i++) {
        dog.puppies.push(`Puppy_${i}`);
    }
}
addPuppies(myDog, 5);
console.log(myDog);