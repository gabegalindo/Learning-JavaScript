'use strict'; // this is how to activate strict mode. MUST be set at the top before any code is written, comments can be written above. ALWAYS USE STRICT MODE
/* 032 Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :)');

// const interface = 'Audio';
// const private = 534;
// const if = 23;
*/


/* 033 Functions
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function (function call)
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// OR

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number('23');
*/


/* 034 Function Declarations vs Expressions

// Function declaration (can call funtion before declaration)
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2019);
console.log(age1);

// Funtion expression (can not call funtion before declaration)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
*/


/* 035 Arrow Funtions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Multi-line arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/* 036 Functions calling other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/* 037 Reviewing Functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/


///////////////////////////////////////
/* Coding Challenge #1

// Code
// const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Over complicated this
// function checkWinner(dolphinsAvg, koalasAvg) {
//     if (dolphinsAvg > koalasAvg) {
//         const temp = dolphinsAvg / 2;
//         const winByDouble = koalasAvg <= temp;
//         if (winByDouble) {
//             return console.log(`Dolphin's win (${dolphinsAvg} vs. ${koalasAvg})`)
//         } else {
//             return console.log('No team wins!');
//         }
//     } else if (koalasAvg > dolphinsAvg) {
//         const temp = koalasAvg / 2;
//         const winByDouble = dolphinsAvg <= temp;
//         if (winByDouble) {
//             return console.log(`Koala's win (${koalasAvg} vs. ${dolphinsAvg})`)
//         } else {
//             return console.log('No team wins!');
//         }
//     } else {
//         return console.log('No team wins!');
//     }
// }

// This func is much better, simpler
// const checkWinner = function (dolphinsAvg, koalasAvg) {
//     if (dolphinsAvg >= 2 * koalasAvg) {
//         console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`);
//     } else if (koalasAvg >= 2 * dolphinsAvg) {
//         console.log(`Koala's win (${koalasAvg} vs. ${dolphinsAvg})`);
//     } else {
//         console.log("No team wins");
//     }
// }

// Test Data 1
// const dolphinsAvg = calcAvg(44, 23, 71);
// const koalasAvg = calcAvg(65, 54, 49);

// Test Data 2
// const dolphinsAvg = calcAvg(85, 54, 41);
// const koalasAvg = calcAvg(23, 34, 27);

// console.log(`${dolphinsAvg} and ${koalasAvg}`);
// checkWinner(dolphinsAvg, koalasAvg);
*/


/* 039 Intro to Arrays
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// // ARRAY ELEMENTS DONT HAVE TO BE THE SAME
// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years[1]));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);



const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/* 040 Basic Array Operations (Methods)
// Add elements
// Add to end (also returns value of the amount of elements in the array if stored into a variable)
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
// Add to beginning
friends.unshift('John');
console.log(friends);

// Remove elements
// Remove from the end (also returns value of the amount of elements in the array if stored into a variable)
friends.pop();
friends.pop();
console.log(friends);

// to see which element is being removed you can do something like this
// const popped = friends.pop();
// console.log(popped);

// to remove from beginning
friends.shift();
console.log(friends);

// to find the index of an element (returns -1 if the element does not exist)
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// a boolean method to test if an element is in the array
// is a strict tester so a number will not match a string
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/


/////////////////////////////////////////////
/* Coding Challenege #2

// Test Data
const bills = [125, 555, 44];
const tips = [];
const total = [];

// Code
const calcTip = function (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        tips.push(billValue * .15);
    } else {
        tips.push(billValue * .2);
    }
    return;
}

calcTip(bills[0]);
total.push(bills[0] + tips[0]);

calcTip(bills[1]);
total.push(bills[1] + tips[1]);

calcTip(bills[2]);
total.push(bills[2] + tips[2]);

console.log(tips);
console.log(total);
*/


/* 042 Intro to objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991;
    job: 'teacher';
    friends: ['Michael', 'Peter', 'Steven']
};
*/


/* 043 Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Invalid request! Choose between firstName, lastName, age, job, and friends')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschemdtmann';
// console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/


/* 044 Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    canDrive: function () {
        if (this.hasDriversLicense) {
            return 'a';
        } else {
            return 'no';
        }
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

// jonas.calcAge();

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas['calcAge'](1991));

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"

console.log(jonas.getSummary());
*/


//////////////////////////////////////////////
/* Coding Challenge #3


const mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.BMI = this.mass / (this.height ** 2);
    }
};

const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.BMI = this.mass / (this.height ** 2);
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s (${john.BMI})!`);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.name}'s BMI (${john.BMI}) is higher than ${mark.name}'s (${mark.BMI})!`);
} else {
    console.log('They are both obese');
}
*/


/* 046 Iteration: the For loop

// console.log('Lifting weights repetition 1🏋️‍♀️');
// console.log('Lifting weights repetition 2🏋️‍♀️');
// console.log('Lifting weights repetition 3🏋️‍♀️');
// console.log('Lifting weights repetition 4🏋️‍♀️');
// console.log('Lifting weights repetition 5🏋️‍♀️');
// console.log('Lifting weights repetition 6🏋️‍♀️');
// console.log('Lifting weights repetition 7🏋️‍♀️');
// console.log('Lifting weights repetition 8🏋️‍♀️');
// console.log('Lifting weights repetition 9🏋️‍♀️');
// console.log('Lifting weights repetition 10🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
}
*/


/* 047 Looping Arrays, Breaking, and Continuing

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i <= jonas.length - 1; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // Filling an array with typeof
    // types[i] = typeof jonas[i];

    // Another way to fill an array
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
}

console.log(ages);

// continue and break
// CONTINUE is a way to immediately exit the current iteration of a loop and start the next iteration, ignoring the rest of the code within the loop statement
console.log('---- ONLY STRINGS ----');
for (let i = 0; i <= jonas.length - 1; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

// BREAK is a way to completely exit a loop once the condition has been meet
console.log('---- BREAK WITH NUMBER ----');
for (let i = 0; i <= jonas.length - 1; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}
*/


/* 048 Looping backwards and loops in loops

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`--------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♀️`);
    }
}
*/


/* 049 The while loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}🏋️‍♀️`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log();

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
console.log(`You finally rolled a ${dice}`);
*/


////////////////////////////////////////////////
/* Coding Challenege #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];


const calcTip = function (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        tips.push(billValue * .15);
        totals.push(tips[tips.length - 1] + billValue);
    } else {
        tips.push(billValue * .2);
        totals.push(tips[tips.length - 1] + billValue);
    }
    return;
}

for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]);
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
*/
