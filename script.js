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


function objectKeyValues (obj) {
    const keys = Object.keys(obj);
    let i = 0;
    while (i < keys.length) {
        const key = keys[i];
        const value = obj[key];
        console.log(`${key}: ${value}`);
        i++;
    }
}
const object = { name: 'John', age: 30, city: 'New-York' };
objectKeyValues(object);

function checkKeys(obj, keyToCheck) {
    for (let key in obj) {
        if (key === keyToCheck) {
            return true;
        }
    }
    return false;
}
const object1 = { name: 'John', age: 30, city: 'New-York' };
const key = 'age';
console.log(checkKeys(object1, key));

function objectValues(obj) {
    const values = Object.values(obj);
    let result = '';
    let i = 0;
    do {
        result += values[i];
        i++;
    } while (i < values.length);
    return result;
}
const object2 = { prop1: 'Hello', prop2: 'World', prop3: '!' };
console.log(objectValues(object2));

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (vowels.includes(str[i])) {
            count++;
        }
        i++;
    }
    return count;
}
const string = "Hello world, my name is Albert";
console.log(countVowels(string));

function calculateAverageGrades(gradesObject) {
    const resultObject = {};
    for (let student in gradesObject) {
        const grades = gradesObject[student];
        const average = calculateAverage(grades);
        resultObject[student] = `medium: ${average.toFixed(2)}`;
    }
    return resultObject;
}
function calculateAverage(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}
const gradesObject = { John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] };
const result = calculateAverageGrades(gradesObject);
console.log(result);

function reverseString(str) {
    let reversedString = '';
    let i = str.length - 1;
    do {
        reversedString += str[i];
        i--;
    } while (i >= 0);
    return reversedString;
}
const string1 = 'Hello, world!';
console.log(reverseString(string1));

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
const string3 = 'level';
console.log(isPalindrome(string3));


const grades = [
    { name: "Anna", note: 9 },
    { name: "Denis", note: 7 },
    { name: "Christian", note: 8 },
    { name: "Daniel", note: 6 },
    { name: "Elena", note: 10 }
];
const sumOfGrades = grades.reduce((total, student) => total + student.note, 0);
const averageGrade = sumOfGrades / grades.length;
console.log(averageGrade.toFixed(0));

const products = [
    {name: "Tshirt", price: 50, isAvailable: true },
    {name: "Pants", price: 80, isAvailable: false },
    {name: "Jacket", price: 120, isAvailable: true },
    {name: "Shirt", price: 60, isAvailable: true },
    {name: "Skirt", price: 40, isAvailable: false }
];
const availableProducts = products.filter(product => product.isAvailable);
const productNames = availableProducts.map(product => product.name);
console.log(productNames);
 
const numbers3 = [10, 5, 8, 15, 3, 20];
console.log(numbers3.reduce((max, current) => (current > max ? current : max), numbers[0]));

const studentEvaluation = [
    {John: [8, 7, 9]}, 
    {Mary: [9, 9, 10]}, 
    {Alex: [6, 8, 7]}
];
const averageEvaluation = studentEvaluation.reduce((acc,student) => {
    let key = Object.keys(student)[0];
    let value = student[key];
    let total = value.reduce((acc, score) => acc + score, 0);
    acc[key] = (total / value.length).toFixed(0);
    return acc;
},{});
console.log(averageEvaluation);