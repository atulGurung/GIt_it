//?: IIFE(Immediately Invoked Function Expression).

// (function(a , b){
//     console.log(a ** b);
// })(4 , 2);

// const user = (function (){
//     const userData = {
//         userName :'John',
//         userAge: 20,
//     };
//     function getName(){
//         console.log(userData.userName);
//     }
//     function updateAge(age){
//         console.log(userData.userAge + age);
//     }

//     return {getName , updateAge};
// })();

// console.log(user);
// user.getName();
// user.updateAge(5);

// Declare the "spaceSound" object literal

//?: Prototype code //

// function Galaxy(name){
//     this.name = name;
// }
// const milkyWay = new Galaxy('Milky Way');
// console.log(milkyWay.__proto__.__proto__.__proto__);


// let arr = new Array(3);
// let result = arr.__proto__.__proto__;

// console.log(result);

//?: Object destructuring //

// let obj = {firstname:"john",lastname:"Doe"};
// let{firstname:fn, lastname:ln} = obj;
// console.log(firstname);

// const {a, b} = {a:1,b:2};
// const x = a + b;
// console.log(x);

// let obj = {name:"John",country:"India",age:21};
// let name;
// ({name} = obj);
// let{country:c, age: a} = obj;
// obj.country = "Canada";
// console.log(name,c,a);

//?: "class" Inheritance  
// function person(name){
//     this.name = name;
// }
// person.prototype.greet = function(){
//     console.log(`Hello, my name is ${this.name}`);
// }
// function Employee(name, position){
//     person.call(this, name);
//     this.position = position;
// }
// Employee.prototype.greet = function(){
//     console.log(`Hello I am an Employee, My name is ${this.name}`);
// }
//     const john = new Employee('John','Manager');
//     john.greet();

// function Animal(){
//     this.sound = "Animal Sound";
// }
// function Cat(){
//     Animal.call(this);
// }
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Cat.prototype.makeSound = function(){
//     console.log(this.sound);
// };
// const cat =  new Cat();
// cat.sound = "Meow";

// cat.makeSound();

//?: Built-in Classes and thier object

// const birthDate = new Date('1998-08-22');
// console.log(birthDate);

// const today = new Date();
// console.log(today);


// console.log(age);

// const obj1 = {
//     name: "John",
//     greet(){
//         console.log(`Hello, ${this.name}!`);
//     }
// };
// const obj2 = {...obj1}
// obj2.name = "Jane",
// obj2.greet = function(){
//     console.log(`Hi, ${this.name}!`);
// };

// obj1.greet();
// obj2.greet();

for(let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}