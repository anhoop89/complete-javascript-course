'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements) {
  //  innerHTML is like text content, all html tags will be included in innerHTML
  containerMovements.innerHTML = 'hohoha hahah default using innerHTML for containerMovements';
  // or using .textContent = 0; 
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'; 
    const html = `     
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov} 000€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

displayMovements(account1.movements);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr);

// SLICE Method : select element 
// not mutate the orginal array
console.log("slice 2 ", arr.slice(2))
console.log("slice 2 5",arr.slice(2, 5));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log("shadow copy: ", [...arr]);

// SPLICE : remove the element out of the arrr
// mutate the orginal array
arr.splice(-1);
console.log(arr.splice(2));
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT 
// append the letters from arr and arr2 to letter
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);

// JOIN
console.log(letter.join(' - '))

// slice method
// at method


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//  learning about the loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited:  ${movement}`)
  } else  
    console.log(`you withdrew: ${ Math.abs(movement) }`)
}
console.log(` ==== different to display with an index ===`)
//  [i, movement] : orders matter including current index, current value
// we need to use .entries() instead
for (const [i,movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i+1} you deposited:  ${movement}`)
  } else
    console.log(`${i + 1} you withdrew: ${Math.abs(movement)}`)
}


console.log("---- FOREACH ---")
// how to use forEach method - using a callback function
// .forEach(callback function)
// parameter of the callback function matters
// function(movement, i , array) 
//          current value, current index, current array we looping
movements.forEach(function (movement,i, array) {
  if (movement > 0) {
    console.log(`ForEach ${i + 1} - you deposited:  ${movement}`)
  } else
    console.log(`ForEach ${i + 1}- you withdrew: ${Math.abs(movement)}`)
})

// forEach with maps and sets
console.log(` forEach with maps and sets`)

const currencies = new Map([
  //  key , value
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(map)
  console.log(key," : ", value)
})

// SET

console.log("==== With SET === ")
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
//  set doesnt have key or index. so key and value would be the same
// _ variable is throw away variable. 
currenciesUnique.forEach(function (value, key, set) {
  console.log(`${value} : ${key}`)
})

