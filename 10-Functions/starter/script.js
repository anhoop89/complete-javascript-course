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