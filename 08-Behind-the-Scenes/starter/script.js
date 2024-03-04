'use strict';
// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     console.log(firstName);
//     console.log(age);

//     function printAge(){
//         const output = `you are ${age}, born in ${birthYear}`
//         console.log(output);
//     }
//     printAge();
//     return age; 
// }

// const firstName = 'Anh Ho';
// calcAge(1992)

// console.log("default", this);

// const func = function (a) {
//     const c = 2;
//     console.log(a - 2);
//     console.log(this);
// }
// func(10);
// const arrFunc = (a) => {
//     console.log(a - 2);
//     console.log("arrFunc: ",this);
// }

// arrFunc(11);


const anh = {
    firstName: 'Anh Ho',
    year: 1997,
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);
        // option 1:
        // const self = this;
        // const testing = function () {
        //     console.log(`hola`, self);
        //     console.log(`testing function inside!`);
        //     console.log(self.year >= 1996 && self.year <= 2000);
        // }
        
        //option 2: arrow function this keyword will use the parent's obj
        const testing = () => {
            console.log(`hola from testing`, this);
            console.log(`testing function inside!`);
            console.log(this.year >= 1996 && this.year <= 2000);
        }
       testing();
    },
    greet: () => console.log(`heyyyy from greet ${this.firstName}`)
}

anh.calcAge();
anh.greet();