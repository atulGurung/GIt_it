var userName = "Tom";
var userAge = 25;
console.log(`Username: ${userName}`);
console.log(`userAge: ${userAge}`);

greetUser(userName);

function greetUser(name){
console.log(`**************************************`);
var greet = 'I hope you are doing fine';
console.log(`hello ${name}, ${greet}`);
var currentYear = 2030;
const year = birthYear(currentYear, userAge);
console.log(`*****************************`);
return `Your birth year is ${year}`;
}

function birthYear(year, age){
    console.log('Calcute the birth year');
    return year-age;
}

var birthYear = greetUser(userName);
console.log(birthYear);