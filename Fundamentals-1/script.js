/* 010 values and variables
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher';

console.log(myFirstJob);
*/

/* 012 data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);
*/


/* 013 let, const, and var
let age = 30;
age = 31;
const birthYear = 1991;
// birthYear = 1990;

const job;

var job = 'programmer';
job = 'teacher';
*/

/* 014 Basic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 which = 2*2*2

const firstName = "Jonas";
const lastName = 'Scmedtmann';
console.log(firstName + " " + lastName);


// assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x /= 2;
x++;
x--;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/* 015 Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////////////////
// Coding Challenge #1

// Test Data 1
// const markHeight = 1.69;
// const johnHeight = 1.95;

// const markWeight = 78;
// const johnWeight = 92;

// const markBMI = markWeight / (markHeight * markHeight);
// const johnBMI = johnWeight / (johnHeight * johnHeight);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

// Test Data 2
// const markHeight = 1.88;
// const johnHeight = 1.76;

// const markWeight = 95;
// const johnWeight = 85;

// let markHigherBMI = false;

// const markBMI = markWeight / (markHeight ** 2);
// const johnBMI = johnWeight / (johnHeight ** 2);

// if (markBMI > johnBMI) markHigherBMI = true;
// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

/* 017 String and template literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

// using template literals i am able to use ${} to input variables and solve equations without having to use + and "" to combine everything
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)

// old school way to make string with multiple lines
console.log('String with \n\
multiple \n\
lines')

// new school way to make string with multiple lines
// note that i use template literals which are the back ticks `` above tab
console.log(`String with
multiple
lines`);
*/

/* 018 If/Else statements
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start her driving license 🚗`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

let century;
const birthYear = 1998;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)
*/


/////////////////////////////////////////////////////////////
// Coding Challenge #2

// Test Data 1
// const markHeight = 1.69;
// const johnHeight = 1.95;

// const markWeight = 78;
// const johnWeight = 92;

// Test Data 2
// const markHeight = 1.88;
// const johnHeight = 1.76;

// const markWeight = 95;
// const johnWeight = 85;


// Solution
// const markBMI = markWeight / (markHeight ** 2);
// const johnBMI = johnWeight / (johnHeight ** 2);

// if (markBMI > johnBMI) {
//     markHigherBMI = true;
//     console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})!`)
// }
// else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's(${markBMI})!`)
// }


/* 020 Type coversion and coercion
// Type Conversion
// This is how to convert to a number from a string but the value has to have a number
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);


// This produces NaN(not a number)
console.log(Number('Jonas'));
console.log(typeof NaN);

// How to convert to a string
console.log(String(23), 23);

// Type Coercion
// How to do it bc js will convert for me behind the scenes
console.log('I am ' + 23 + ' years old');

// How not to do it
console.log('I am ' + '23' + ' years old');
console.log('I am ' + String(23) + ' years old');

console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // comes out as the string '11'
n = n - 1;       // converts 11 to a number here bc of - and makes it 10
console.log(n);

n = 2 + 3 + 4 + '5' // comes out as '95'(string) because 2+3+4=9 then 9+'5'='95'

n = '10' - '4' - '3' - 2 + '5' // comes out as '15'(string) because '10'-'4'-'3'='3' then '3'-2=1 which is then translated back to a string 1+'5'='15'
*/


/* 021 Truthy and Flasy Values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height = 10;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/


/* 022 Equality Operators: == vs ===
// const age = 18;

// // === is a strict equal operation where both values must be the exact same in type and value
// if (age === 18) console.log('You just became an adult! (strict)');

// // == is a loose equal operation where both values must match in value but not type
// if (age == '18') console.log('You just became an adult! (loose)');

const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 8) { // '8' == 8
    console.log('Cool! 8 is an amazing number!(loose)');
}

if (favourite === 8) { // '8' does not equal 8
    console.log('Cool! 8 is an amazing number!(strict)');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else {
    console.log('Number is not 8 or 7');
}

if (favourite !== 8) console.log("why not 8");
*/

/* 024 Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

///////////////////////////////////////////////
/* Coding Challenge #3

// Test Data
// const dolphinsAvg = (96 + 108 + 89) / 3;
// const koalasAvg = (88 + 91 + 110) / 3;

// Test Data BONUS 1
// const dolphinsAvg = (97 + 112 + 101)/3;
// const koalasAvg = (109 + 95 + 123)/3;

// // Test Data BONUS 2
// const dolphinsAvg = (97 + 112 + 101)/3;
// const koalasAvg = (109 + 95 + 106)/3;

// code
if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log(`Dolphin's win with an average score of ${dolphinsAvg} beating the Koala's with an average score of ${koalasAvg}`);
} else if (koalasAvg > dolphinsAvg && dolphinsAvg >= 100) {
    console.log(`Koalas's win with an average score of ${koalasAvg} beating the Dolphins's with an average score of ${dolphinsAvg}`);
} else if (koalasAvg === dolphinsAvg && dolphinsAvg >= 100) {
    console.log(`The Dolphin's and the Koala's tie with an average score of ${koalasAvg}`);
} else {
    console.log('No one wins the trophy :,(');
}
*/

/* 026 The switch statement
const day = 'saturday';
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thrusday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}
*/

/* 028 The Condition Operator

// Practically an if statement without all of the extra syntax
// const age = 23;
// age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water💧');

// the most commonly used way
// REMEMEBR THIS
const drink = age >= 18 ? 'wine🍷' : 'water💧';
console.log(drink);

// the short if statement written above is translated down here to the full version which has a much bigger syntax
let drink2;
if (age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water💧'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`);
*/

///////////////////////////////////////
// Coding Challenge #4

// Test Data

// const billValue = 275;
// const billValue = 40;
// const billValue = 430;

// code
const tip = billValue >= 50 && billValue <= 300 ? (billValue * .15) : (billValue * .2);

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value was ${billValue + tip}`);