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
    name: 'Eurowings',
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
 