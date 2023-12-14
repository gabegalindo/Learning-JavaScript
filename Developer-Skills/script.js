// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);
// console.log('hello world');
// console.log('hello world');

// const calcAge = (birthYear) => 2037 - birthYear;

/* 059
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const secondTemps = [45, 23, 1, 4, 7, 9, 12];

const calcTempAmplitude = function (temps1, temps2) {
  //   for (let i = 0; i < temps2.length; i++) {
  //     temps.push(temps2[i]);
  //   }

  const temps = temps1.concat(temps2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures, secondTemps);
console.log(amplitude);
*/

/* 061 Debugging with the console and breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());

const calcTempAmplitudeBug = function (temps1, temps2) {
  //   for (let i = 0; i < temps2.length; i++) {
  //     temps.push(temps2[i]);
  //   }

  const temps = temps1.concat(temps2);

  let max = 0;
  let min = -10;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug(temperatures, secondTemps);
console.log(amplitudeBug);
*/

///////////////////////////////////////////////
// Coding Challenge #1

function printForecast(arr) {
  let temps = ``;
  for (let i = 0; i < arr.length; i++) {
    temps += `${arr[i]} in ${i + 1} days ... `;
  }
  console.log(`... ${temps}`);
}

// Test Data 1
// const testArray = [17, 21, 23];

// Test Data 2
const testArray = [12, 5, -5, 0, 4];

printForecast(testArray);
