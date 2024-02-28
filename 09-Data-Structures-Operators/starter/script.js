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