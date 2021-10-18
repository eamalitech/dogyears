const myAge = 24;
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;

//Dog years accounted for by laterYears
laterYears *= 4 

//
console.log(earlyYears);
console.log(laterYears);

//final age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//username converted to all lowercase
var myName = 'Eric Aazore Kwadwo'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
