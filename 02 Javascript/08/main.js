const odd =  [1, 3, 5, 7, 9, 11, 15];
console.log(odd);

// const even = [2, 4, 6, 8, 10 ,12, 14, 16]
const even = new Array(2, 4, 6, 8, 10 ,12, 14, 16, 18, 20);
console.log(even);

console.log(odd[0]);
console.log(odd[7]);
console.log(odd[8]);

console.log(even[5]);
console.log(even.length);
console.log(even[even.length - 1]);

const student = {
    firstName: "Sara",
    lastName: "Islam",
    birthYear: 1996,

    calcAge: function () {
        return 2022 - this.birthYear;
    },

    greetings: function () {
        return `Hello, ${this.firstName}`;
    },
};

console.log(student.calcAge());
console.log(student.greetings());

const student2 = student;

student2.firstName = "Tumpa";

console.log(student)
console.log(student2)



// loop
for (let i = 10; i <= 1000; i += 10){
    console.log(i);
}

for (let i = 10; i <= 1000; i += 10) {
    console.log(i);
}

for (let i = 100; i >= 0; i--){
    console.log(i);
}

const sabrinArray = [
    "Sabrina",
    "Ratul",
    "iMac",
    "MacOS",
    "iphone 16",
    "Programmer",
    2022 - 1996,
    ["trina", "Mina", "Rina", "Parina"],
    true,
    "Dancer",
];

console.log(sabrinArray.length);

for (let i = 0; i < sabrinArray.length; i++){
    console.log(sabrinArray[i])
}


const numbers = [10, 21, 45, 78, 50, 65];
let sum = 0; 
for(i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}
console.log(sum);


const arr = [10, true, 21, "a", "b", false, 55, true, "x"];
console.log(arr);
const arr2 = [];
for(i = 0; i < arr.length; i++){
    arr2.push(typeof arr[i]);
}
console.log(arr2);


const years = [1994, 1996, 1998, 2001, 1993, 1995];
const ages = [];
for (let i = 0; i < years.length; i++){
    ages.push(2022 - years[i])
}
console.log(ages)
