// 'use strict';

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const country1 = describeCountry('Argentina', 46, 'Buenos Aires');
// const country2 = describeCountry('Morocco', 34, 'Marrakech');
// const country3 = describeCountry('France', 69, 'Paris');

// console.log(country1);
// console.log(country2);
// console.log(country3);

// console.log('Using a function declaration');
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const population1 = percentageOfWorld1(46);
// const population2 = percentageOfWorld1(34);
// const population3 = percentageOfWorld1(69);

// console.log(population1);
// console.log(population2);
// console.log(population3);

// console.log('Using a funtion expression');
// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// console.log(percentageOfWorld2(46));
// console.log(percentageOfWorld2(34));
// console.log(percentageOfWorld2(69));

// console.log('Using an arrow function');
// const percentageOfWorld3 = population => (population / 7900) * 100;

// console.log(percentageOfWorld3(46));
// console.log(percentageOfWorld3(34));
// console.log(percentageOfWorld3(69));

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(population)
//     return `${country} has ${population} million people, which is about ${percentage}% of the world`;
// }

// console.log(describePopulation('Argentina', 46));
// console.log(describePopulation('Morocco', 34));
// console.log(describePopulation('France', 69));

// const populations = [46, 34, 69, 80];

// console.log(`${populations.length === 4 ? true : false}`);
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);

// const neighbours = ['Portugal', 'France', 'Italy'];
// neighbours.push('Utopia');
// neighbours.pop();

// if (neighbours.includes('Germany')) {
//     console.log('You probably choose a country in central Europe');
// } else {
//     console.log('Probably not a central European country')
// }

// console.log(neighbours.indexOf('France'));
// neighbours[1] = 'Deutschland'
// console.log(neighbours);

// const myCountry = {
//     country: 'Argentina',
//     capitol: 'Buenos Aires',
//     language: 'Spanish',
//     population: 46,
//     neighbours: ['Uruguay', 'Paraguay', 'Brazil'],
//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capitol named ${this.capitol}`);
//     },
//     checkIsland: function () {
//         console.log(neighbours.length === 0 ? true : false);
//     }
// };

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capitol named ${myCountry.capitol}`);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

// myCountry.describe();
// myCountry.checkIsland();