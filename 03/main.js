

// Math operator

const currentYear = 2022;
const ageTumpa = currentYear - 1998;
const ageRahat = currentYear - 1996;
console.log(ageTumpa);
console.log(ageTumpa * 2);
console.log(ageTumpa / 2);
console.log(ageTumpa ** 2); // 2 to the power of 24

const firstName = 'Afia Binte';
const lastName = "Ayesha";

console.log(firstName + "" + lastName);

const bikeBrand = "yamaha";
const bikModel = "MT15";

console.log(bikeBrand + "" + bikModel);


// assignment operators
let number = 20 + 10;
// number = number + 15;
number += 15; //15
number -= 10; // 35
// number += 1;
number++; // adds only 1
number--; // minus only 1

console.log(number)

// comparison oparators (>, <ageRahat, >=, <=)

console.log(ageTumpa >= ageRahat)

// oparetor precedence 
console.log(2022 > 2002 + 16);
console.log(20 + (10 + 20) * 2)

// template literals
const boiTUmpa = `my name is`


// conditionals or control structure
const birthYear = 2012;

if(birthYear <= 1999){
    console.log("You are a 90's Kid 😍");
} else {
    console.log("you are not a 90's Kid! 😒")
}

const bikeSpeed = 55;

if(bikeSpeed > 60) {
    console.log("you can not enter the padma Bridge.");
} else {
    console.log("You can enter.");
}

const money = 100;
const burgerPrice = 289;
const pizzaPrice = 350;
const milkShake = 80;
const singaraPrice = 5;

if(money > burgerPrice) {
    console.log("Burger khabo");
} else if (money > pizzaPrice) {
    console.log("pizza khabo");
} else if ( money > milkShake) {
    console.log("Milk shake khabo");
} else {
    console.log("pani khabo");
}


// type conversion (manaually) and coercion (automatically)

const inputYear = "1996";
console.log(inputYear + 10 + 20); //string + number + number 

console.log(inputYear - 10) // string - number 

// Nan not a number 
console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log("Baby" + 20);

// game
let a = "1" + 1; //11
a -= 1;

let x = 2 + 3 + 4 + "5"; //955
x += 5;
console.log(x) ;

let y = "10" - "5" - "3" - 2 + "5";
y -= 10;
console.log(y) // 510;

let b = 1 + 1 - 1 - "1" + "10" - 20;
b += "10";
b--;
console.log(b);


// Truthy and Falsy values
// falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// truthy 
console.log(Boolean(1));
console.log(Boolean(" "));
console.log(Boolean({}));

let money1 = 10;

if(money >= 10){

}

// equality operators ( = )

/* 
 =, assign
 == or === equality
 != or !==, not equal
*/

const age = 21;
if(age == 21){  // js doesn't type coercion, not-strict
    console.log("you are an adult.");
} else {
    console.log("Your are too young")
}

// nested conditions 
const testAge = 17;
const testNID = false;
const testBirthReg = true;
const testPassport = false;

if(testAge === 18) {
    if (testNID) {
        if(testPassport) {
            console.log(`Your age: ${testAge}, applicable for this job. `)
        }
    }
} else if (testAge !== 18 ) {
    if(testBirthReg) {
        console.log(
            `Your age: ${testAge}, and you're not applicable for this job. But you can apply later for NID and Passport.`
        );
    }
} else {
    console.log('absent!')
}

// and, or (&&, ||) 
const savedMoney = 1500000;
const ownHouse = true;
const hasBusiness = false;

if((ownHouse && savedMoney >= 2000000) || hasBusiness)
 {
    console.log("tahole tumar biya hobe na.")
} else {
    console.log("tahole tumar biya hobe na.")
}

const pocketMoney = 200;
const timeLeft = 5;

if(pocketMoney >= 100 && timeLeft >= 6) {

}


// Leap year testing 

/* 
 year % 400 === 0;
 year % 4 === 0 && year % 100 !== 0
*/

let year = Number(prompt("Enter a valid year:")); 
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year. `);
}

// switch case satement
const day = "thursday";

switch (day) {
    case "saturday": 
        console.log("No class!");
        break;
    case "sunday": 
        console.log("class ase!");
        break;
    case "monday":
        console.log("No class!");
        break;
    case "tuesday":
    case "wednesday":
        console.log("No class!");
        break;
    case "thursday":
    case "friday":
        console.log("class ase!");
        break;
    default: 
        console.log("Not a valid day!")
}


// statement and expression
