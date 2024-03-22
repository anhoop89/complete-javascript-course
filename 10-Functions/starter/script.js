'use strict';

const lufthansa = {
    airline: ' Lufthansa',
    iataCode: 'LH',
    bookings: [],
    
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline}
            flight ${this.iataCode} ${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})
    }


}

lufthansa.book(1997, 'Anh')
lufthansa.book(9999, 'HOOOO');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(2000, 'heheh')

book.call(eurowings, 23,'Sarah Cool');
console.log(eurowings.bookings);

book.call(lufthansa, 8888, "lu object")

console.log(lufthansa.bookings);
// call function to call method belonging to another object

const swiss = {
    airline: 'Swiss Air lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 1111111, 'Swisssssss ssss')
console.log(swiss);

//apply method
const flightData = [583, 'George Cooper']

book.apply(swiss,flightData)
console.log(swiss);

// recommend using this method more than apply
book.call(swiss, ...flightData)


// bind method 

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(22222, 'Steven Nguyen')


// console.log(bookEW);

const bookEW23 = book.bind(eurowings, 23)
bookEW23('hahaha hahahaha');
bookEW23('hahaha hohohoho');

// with event listeners

lufthansa.planes = 300; 
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)


/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array 
with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. 
  The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3,
   increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a 
   number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a 
string as an input (called 'type'), which can be either 'string' or 'array'. If type is 
'array', simply display the results array as it is, using console.log(). This should be 
the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both 
the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud
 the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/



const poll = {
  question: ' What is your favourite programming language?',
  option: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(
      `${this.question} \n ${this.option.join('\n')} \n(Write option number)`
    ));
    
    console.log(answer,typeof(answer));
    //    register answer

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    
    this.displayResults();
    this.displayResults('string')
    
  },
  displayResults(type = 'array') {
    if (type === 'array') {
        console.log(this.answers);
    } else if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }

};

// console.log(poll);2

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// { answers: [5, 2, 3]} here is to be passed as this function 
// allows you to call a function with a specified this value 
poll.displayResults.call({ answers: [5, 2, 3]},'string')

// learning async and wait
// immediately invoked function expressions

const runOnce = function () {
  console.log('this will never run again!');  
};

runOnce();
//  this pattern that is IIFE immediately invoked function expressions
(function() {
  console.log('this will never run again!'); 
  
})();

//  also worked for arrow function

(()=>   console.log('this will never run again!')) ();

// clousers

const secureBooking = function () {
  let passengerCount = 0; 

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
    
  }
}
//  return function from secureBooking function will
//  be stored into the booker
const booker = secureBooking();

booker();
booker();
booker();



//  apply closuser for local storage
function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {}

  const save  = () => {
    localStorage.setItem(key, JSON.stringify(store))
  }

  const storage = {
    get(key) {
      return store[key]
    },
    set (key, value) {
      store[key] = value
      save()
    },
    remove(key) {
      delete store[key]
      save()
    }
  }

  return storage
}
// big scope createStorage
//profileSetting will call the function named storage because of the return
const profileSetting = createStorage('profile_setting');
console.log(profileSetting.get('fullName'));

profileSetting.set('fullName', 'Anh Ho')
profileSetting.set('Age', '26');
profileSetting.set('Address', 'abc xyz');


profileSetting.set('fullName', 'Anh Ho 2222');
profileSetting.set('Age', '262222');
profileSetting.set('Address', 'abc xyz222');

// note I can understand closures like a class

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected 
h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. 
Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

// this is called function expression
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', () => {
        header.style.color = 'blue'
    })
    console.log("anh hooooo");
})();