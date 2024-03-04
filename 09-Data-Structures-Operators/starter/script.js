'use strict';


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
<<<<<<< HEAD
// stored obj to variable
const {name, openingHours, categories} = restaurant;

let [x, , y] = restaurant.categories;
console.log(restaurant.categories);
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);  
console.log(restaurant.categories);

restaurant.order(2,0);
console.log(restaurant.categories);
console.log(restaurant.order(2,0));

let a = 111;
let b = 999; 
const obj = {a: 2, b:3, c:100};

({a,b} = obj);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// console.log(open, close);
console.log("======================\n");
const menu = [
  ...restaurant.mainMenu,
  ...restaurant.categories,
  ...restaurant.mainMenu,
];

console.log(menu);

const numbers = [1, 2, 3];
const numbers2 = [11, 22, 33];
const number3 = [12, 22, 32];

const newarr = [...numbers, ...numbers2, ...number3, ...numbers2, ...numbers];
console.log(newarr);


const [pizza, risotto, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log("============>",otherFood);


const [pizza2, ,risotto2, ...hahaFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log('============>', hahaFood);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i <numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("return SUM : " ,sum);
}

const abc = [2,3,4]; 
add(...abc);
=======

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },

};


const menu = {
  food: ['banh beo', 'banh canh'],
  drink: ['cocoa', 'sprite'],
  capacity: 100,
    // es6 enhanced obj literals
    openingHours,
    // new syntax function
    order(foodIndex = 0, drinnkIndex = 0) {
      console.log("food order: ", this.food[foodIndex], this.drink[drinnkIndex]);
      
    }
};





console.log('menu food: ', menu.food);

const combineFoodandDrink = [
  ...menu.food,
  ...menu.drink,
  menu.capacity,
  ...menu.drink,
];
console.log('combine food n drink : ', combineFoodandDrink);

for (const item of combineFoodandDrink.entries()) {
  // console.log(item);
  // console.log(`${item[0] +1}: ${item[1]}`);

  console.log(`${item[0]}`);
}
for (const [index, content] of combineFoodandDrink.entries()) {
  // console.log(item);
  console.log(`${index + 1}: ---  ${content}`);
}

// }
// console.log([...combineFoodandDrink.entries()]);

console.log(menu);

menu.order(1,0);

console.log(menu.openingHours['fri']);


const game = {
  team1: 'anh ho',
  team2: 'king king',
  players: [
    ['John', 'Alice', 'Michael', 'Emily'], // Team 1 players
    ['David', 'Sophia', 'Emma', 'Daniel'], // Team 2 players
    ['Liam', 'Olivia', 'Noah', 'Ava'] // Substitute players
  ],
  score:'4:0',
  scored: ['John', 'Sophia', 'Michael', 'David','John','John','John'],
  date: '2024-02-14', // Date of the game
  odds: {
    team1: 2.5,
    x: 3.0,
    team2: 2.8
  }
};

console.log(game);

for (const [index, name] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${name}`);
}



// use a loop to calculate the average odd and log it to the console
let sum = 0;
for (const item of Object.values(game.odds)) {
  sum += item; 
}

let avg = sum / Object.values(game.odds).length; 
console.log(Object.values(game.odds));

console.log(sum, avg);


//3 
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; 
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {

}

for ( const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);


// set : add , delete, size
// map  | map.set, map.get, size 

const question = new Map ([
  ['question', ''],
  [],

])

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, 
and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const events = [...new Set(gameEvents.values())];
console.log("display events: ", events);

gameEvents.delete(64);

console.log(gameEvents);
//3. Print the following string to the console: "An event happened, 
//on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop()
// pop(). it takes the value of the last element from the array

console.log(time);

console.log(`An event happened, on average, every ${time/gameEvents.size} minutes `);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOD';
  console.log(`[${half} HALF] ${min}: ${event}`);
  
}

//  learning string
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.slice(4));
// get string from the index 4 to before 7
console.log((airline.slice(4,7)));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log((airline.slice(airline.lastIndexOf(' ') + 1)));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  console.log(s);
  
  if (s === 'B' || s === 'E')
    console.log(`${seat} seating in the middle!`);
  else
    console.log(`${seat} seating outside`);
    
    
}

checkMiddleSeat('11B');
checkMiddleSeat('11E');
checkMiddleSeat('11F');
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';

let correct = passenger.toLowerCase();

correct = correct[0].toUpperCase() + correct.slice(1);

console.log(correct);


const checkTrim = 'abc    '; 

const trueTrum = 'abc';

console.log(checkTrim.trim() === trueTrum);

const capitalizeName = function (name) {
  const names = name.split(' ');
  let update_temp = [];
  for (const n of names) {
    // 1st method
    // update_temp.push(element[0].toUpperCase() + element.slice(1));
    // 2nd method
    update_temp.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(names);
  console.log(update_temp.join(' '));
  
}

capitalizeName('anh ho jessie le');


//padding

const msg = 'go to gate 23';
console.log(msg.padStart(25, '+').padEnd(30,'+'));


const masterCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(str);
  
  console.log(last.padStart(str.length, '*'));
  
}
masterCard(1234567895555);

// repeat

const msg2 = 'hello .... '

console.log(msg2.repeat(5));



/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b

HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working 😉

HINT 4: This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));

// document.body.append(document.createElement('button'));



// document.querySelector('button').addEventListener('click', function() {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n')
//   console.log(rows);

//   for (const[index, row] of rows.entries() ) {
    
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output  =`${first}${second.replace(second[0], second[0].toUpperCase())}`
//     console.log(first, '===========',second);
//     console.log(` ${output.padEnd(20)} ${'✔'.repeat(index + 1)}`);
//   }

// })
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


console.log(flights.split('+'));
const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  // console.log(flight)
  const [type, from, to, time] = flight.split(';')
  const output = `${flight.startsWith('_Delayed') ? '😡' : '🥳'}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(30)
  console.log(output)
}

const createBooking = function (
  flightNum,
  numPsg = 1,
  price = numPsg * 199
) {

  const booking = {
    flightNum,
    numPsg,
    price
  }
  console.log(booking)
}

createBooking('asd',undefined, 1000)
>>>>>>> b03e9949e14501126a3308f696a3f02af7bf3646
