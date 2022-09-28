
// class - 05
// functions delarations
function addThreeNumbers(num1, num2, num3){
    const sum = num1 + num2 + num3;
    return sum;
}
console.log(addThreeNumbers(10, 20, 30));

const a = 10;
const b = 20;
const c = 30;

const mySum = addThreeNumbers(a, b, c)
console.log(mySum);

// function expression
const juiceFactory = function (apples, orange){
    const juice = (apples * orange) / 2;
    return `${juice} juice is ready using ${apples} apples and ${orange} orange`;
}

console.log(juiceFactory(10, 5));


// kono ekta varibale ba kno ekta function expression ke declare korar age call kora jabe na call korle se ketre error show korbe unexpected refernce error


const ageCalculator = (birthYear) => 2022 - birthYear;
console.log(ageCalculator);

// ternary oparetor
const ageCalculator2 = (birthYear) => (2022 - birthYear) >= 18 ? `adult` : `You are not adult`

console.log(ageCalculator);