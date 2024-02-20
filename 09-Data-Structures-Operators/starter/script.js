'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
