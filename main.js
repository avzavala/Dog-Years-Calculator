// This variable declares human years to convert
var myAge = 36;

// Variable for the early years 
var earlyYears = 2;

earlyYears *= 10.5;

// laterYear variable is used to multiply the age minus the first to years by 4
var laterYears = ((myAge - 2 )* 4);

// this are the two values declared on variables 
console.log (earlyYears, laterYears);

//addign both values to get the real age in dog years
var myAgeInDogYears = (earlyYears + laterYears);

//create a string to declare variable and make it lower case
var myName = 'Valeria'.toLowerCase();

console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);


