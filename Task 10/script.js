/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;

let a = composition(one, four);
function composition(x, y) {
    return x + y;
};

let b = division(four, two);
function division(x, y) {
    return x / y;
};

let c = substraction(three, two);
function substraction(x, y) {
    return x - y;
};

let d = multiplication(five, two);
function multiplication (x, y) {
    return x * y;
};

console.log(a);
console.log(b);
console.log(c);
console.log(d);
