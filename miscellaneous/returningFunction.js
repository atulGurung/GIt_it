function greet(message){
    return function(wishes){
        console.log(`${wishes},${message}`);
    }
}

// ?: const greeting = greet('I hope you are doing well');
//?: greeting("Hello");

// * OR ()two ways to return a function to function...//

greet('I hope you are doing well')('Hey!!');