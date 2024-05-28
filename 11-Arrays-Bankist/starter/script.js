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


const displayMovements = function (acc) {
  //  innerHTML is like text content, all html tags will be included in innerHTML
  // or using .textContent = 0; 
  acc.movements.forEach(function (mov, i) {
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

const calcPrintBalance = function (acc) {
  // 0 means starting at 0
  const balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance} EUR`
}


const calDisplaySummary = function (account) {
  const sumIn = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${sumIn}€`;

  const sumOut = account.movements.reduce((acc, cur) => acc + cur, 0) - sumIn; 
  labelSumOut.textContent = `${Math.abs(sumOut)}€`;

  //interest 
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * account.interestRate / 100)
    .filter(i => i >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;

}

//1st way
// const username = user.toLowerCase().split(' ');
// const iniUserName = username.map(word => word.slice(0, 1)).join('');
// OR
//console.log(username.map(word => word[0]).join(''))
// OR


const createUsernames = function (accs) {
  accs.forEach((acc) => {
    // create a new property for the object named username.
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
}
createUsernames(accounts)

const updateUI = function (currentAccount) {
  displayMovements(currentAccount);
  calcPrintBalance(currentAccount);
  calDisplaySummary(currentAccount);
}
// Event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount =accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount)
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    //clear input fields

    console.log(inputLoginUsername)
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
    console.log('login');
  }
})

// transfer money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find((acc) => acc.username === inputTransferTo.value);
  console.log(amount, receiverAcc)
  inputTransferTo.value = inputTransferAmount.value = '';
  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount); 
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
    console.log("close the account")
    // find the index in order to delete the account from the array
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index)
    // splice removes the element from the array and returns it  
    accounts.splice(index, 1);
    console.log(accounts)
    // hide ui
    containerApp.style.opacity = 0;
  } 
  
  inputCloseUsername.value = inputClosePin.value = '';
})
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e']
// console.log(arr);

// // SLICE Method : select element
// // not mutate the orginal array
// console.log("slice 2 ", arr.slice(2))
// console.log("slice 2 5",arr.slice(2, 5));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log("shadow copy: ", [...arr]);

// // SPLICE : remove the element out of the arrr
// // mutate the orginal array
// arr.splice(-1);
// console.log(arr.splice(2));
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e']
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// // CONCAT
// // append the letters from arr and arr2 to letter
// const letter = arr.concat(arr2);
// console.log(letter);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letter.join(' - '))

// // slice method
// // at method



// //  learning about the loop
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`you deposited:  ${movement}`)
//   } else
//     console.log(`you withdrew: ${ Math.abs(movement) }`)
// }
// console.log(` ==== different to display with an index ===`)
// //  [i, movement] : orders matter including current index, current value
// // we need to use .entries() instead
// for (const [i,movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i+1} you deposited:  ${movement}`)
//   } else
//     console.log(`${i + 1} you withdrew: ${Math.abs(movement)}`)
// }


// console.log("---- FOREACH ---")
// // how to use forEach method - using a callback function
// // .forEach(callback function)
// // parameter of the callback function matters
// // function(movement, i , array)
// //          current value, current index, current array we looping
// movements.forEach(function (movement,i, array) {
//   if (movement > 0) {
//     console.log(`ForEach ${i + 1} - you deposited:  ${movement}`)
//   } else
//     console.log(`ForEach ${i + 1}- you withdrew: ${Math.abs(movement)}`)
// })

// // forEach with maps and sets
// console.log(` forEach with maps and sets`)

// const currencies = new Map([
//   //  key , value
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(map)
//   console.log(key," : ", value)
// })

// // SET

// console.log("==== With SET === ")
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
// //  set doesnt have key or index. so key and value would be the same
// // _ variable is throw away variable.
// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${value} : ${key}`)
// })

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, they are just interested in
 knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, 
 and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), 
and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
 So create a shallow copy of Julia's array, and remove the cat ages from that copied array
  (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, 
and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1)
//   dogsJuliaCorrected.splice(-2)
//   // or .slice(1,3)

//   const dogs = dogsJuliaCorrected.concat(dogsKate)
//   console.log(dogs)

//   //("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3 ) {
//       console.log(`Dog Number ${i+1} is an adult, and is ${dog} years old`)
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶, and is ${dog} years old`)
//     }
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human 
ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does 
the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, 
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that 
  are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges
   how we calculate averages 😉)

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
// */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);
// const displayBalance = movements.reduce((acc, cur) => acc + cur);
// console.log(displayBalance)
// console.log(deposits);
// console.log(withdrawals)
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(movements)
// // make sure to initialize the start value 
// const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0])
// console.log(max)

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd
// })

// const movementsUSD = movements.map(mov => mov * eurToUsd)

// console.log(movements)
// console.log(movementsUSD)

// const movementsUSDfor = []

// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// const movementsDescriptions = movements.map((mov, i) =>
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// )
// console.log(movementsDescriptions)

// const calcAverageHumanAge = function (dogAges) {
//   const humanAge = dogAges.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4 )
//   console.log(humanAge)
//   const adult = humanAge.filter(age => age >= 18)
//   console.log(adult)
//   const average = adult.reduce((acc, mov) => acc + mov, 0) / adult.length;
//   //  acc starts with 0 + mov/the number of ele in the arr. 
//   // const average = adult.reduce((acc, mov) => acc + mov / adult.length, 0);

//   console.log(average)
// }

// // calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

// //  PIPELINE
// // it's hard to debug when using pipeline.
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD)


// // coding challenge #3

// const calcAverageHumanAge2 = (dogAges) =>
//   dogAges
//   .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//   .filter(age => age >= 18).reduce((acc, mov, i, arr) => acc + mov / arr.length, 0) ; 

// console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]))


// //  find method
// const firstWithdrawal = movements.find(mov => mov < 0) 
// console.log(movements)
 
// console.log(firstWithdrawal)

// console.log(accounts)

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account)