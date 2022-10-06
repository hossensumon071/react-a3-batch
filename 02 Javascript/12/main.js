// Clousers

// function refrigerator(){
//     let coke = 6;

//     return function () {
//         coke--;
//         console.log(`${coke} coke`)
//     }
// }
// const drink = refrigerator();
// console.log(drink);
// drink();
// drink();
// drink();

// DOM

// 1. selecting elements
// getElementByID() -- fast / rarely

const title = documnet.getElementById("main-heading");
const secondTitle = document.getElementById("second-heading");

// getElementByClassName()
const country = document.getElementsByClassName("country");

// getElementByTagName()
const input = document.getElementsByTagName("input");
const country2 = document.getElementsByTagName("li");

// querySelector() -- most of the cases
const title2 = document.querySelector("#main-heading");
const btn = document.querySelector(".btn"); 
const h2 = document.querySelector("h2");

querySelectorAll() //--most of the cases
const country1 = document.querySelectorAll(".country");
console.log(country1)

// styling elements 
const title1 = document.querySelector("#main-heading");
title.style.color = "crimson"; // inline-style
title.style.backgroundColor = "black";
title.style.fontSize = "3rem";

const countries = document.querySelectorAll(".country");
for (let i = 0; i < countries.length; i++) {
    countries[i].style.color = "hotpink";
    countries[i].style.fontSize = "hotpink";
}