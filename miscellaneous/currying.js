//!: Using CURRYING in JS... //

function power(b){
    return function(a){
        return a ** b;
    }
}

const square = power(4);

console.log(`The power of square: ${square(3)}`)
console.log(`The power of square: ${square(2)}`)
console.log(`The power of square: ${square(4)}`)
console.log(`The power of square: ${square(5)}`)
console.log(`The power of square: ${square(6)}`)
console.log(`The power of square: ${square(7)}`)
console.log(`The power of square: ${square(8)}`)

const cube = power(3);

console.log(`The power of cube: ${cube(2)}`)
console.log(`The power of cube: ${cube(3)}`)
console.log(`The power of cube: ${cube(4)}`)
console.log(`The power of cube: ${cube(5)}`)
console.log(`The power of cube: ${cube(6)}`)
console.log(`The power of cube: ${cube(7)}`)
console.log(`The power of cube: ${cube(8)}`)
