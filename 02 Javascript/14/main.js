"use strict";
const resturant = {
    name: "burger house 420",
    location: "Puran Dhaka, Dhaka, Bangladesh",
    categories: ["italian", "Vegetarian", "Local", "Organic"],
    starterMenu: [
        "Chicken cheese Burger",
        "Beef Burger",
        "Garlic Bread",
        "Italian SPicy Pasta",
        "Begdadi Shahi Biriyani",
        "Mexican Chili Chicken",
    ],
    mainMenu: ["Burger", "Pizza", "Pasta", "Fajita", "French Fries"],
    openHours: {
        sun: {
            open: 10,
            close: 22,
        },
        fri: {
            open: 9,
            close: 23,
        },
        wed: {
            open: 11,
            close: 22,
        },
    },
    order: function(starterIndex, mainIndex){
        console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex])
    }
};

// destructuring arrays
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);

const arr2 = [7,8,9];

const [food1, , food2] = resturant.mainMenu

// switching variables
let first = 10;
let second = 20;
let temp = first;

first = second;
second = temp;

console.log(first, second);



// nested destructuring
const nested = [2,3,[5,6]];
// const [i, j, k, l] = nested;
const [i, j, [k, l]] = nested;
console.log(i,j,k,l);


const nested2 = ["Tumpa", "ayesha", ["sabrina", "nibir"], "nirob"];
const [f1, f2, [f3, f4], f5] = nested2; 
console.log(f1, f2, f3, f4, f5); 

// default values
const arrNew = [10, 20];
const [p, q, r, w] = arrNew; 
console.log(p, q, r, w); 


// object destructuring 

// const {name, categories, mainMenu, starterMenu} = resturant;

// default values
const {main = [], starterMenu = []} = resturant; 


// mutating variables
let a1 = 100;
let a2= 200;

[a2, a1] = [a1, a2];
console.log(a1, a2)