"use strict";

// Data

const accounts = [
    {
        owner: "Sumon Hossen",
        movements: [2500, 500, -750, 1200, 3200, -1500, 500, 1200, -1750, 1800],
        interestRate: 1.5, // % 
        password: 1234,
        movementsDates: [
            "2021-11-18T21:31:17.472Z",
            "2021-11-18T21:31:17.656Z",
            "2022-11-18T21:31:17.963Z",
            "2022-11-18T21:31:17.234Z",
            "2022-11-18T21:31:17.364Z",
            "2021-11-18T21:31:17.163Z",
            "2021-11-18T21:31:17.785Z",
            "2022-11-18T21:31:17.198Z",
            "2021-11-18T21:31:17.578Z",
            "2022-11-18T21:31:17.478Z",
        ],
        currency: "USD",
        locale: "en-US",
    },
    
    {
        owner: "Surah Binte Ayesha",
        movements: [2500, 4700, -750, 1700, 7200, -5000, 5700, 1290, -1450, 7800],
        interestRate: 1.5, // % 
        password: 1234,
        movementsDates: [
            "2021-11-18T21:31:17.472Z",
            "2021-11-18T21:31:17.656Z",
            "2022-11-18T21:31:17.963Z",
            "2022-11-18T21:31:17.234Z",
            "2022-11-18T21:31:17.364Z",
            "2021-11-18T21:31:17.163Z",
            "2021-11-18T21:31:17.785Z",
            "2022-11-18T21:31:17.198Z",
            "2021-11-18T21:31:17.578Z",
            "2022-11-18T21:31:17.478Z",
        ],
        currency: "USD",
        locale: "en-US",
    },
    
]

// Elements


const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");

const inputLoginUsername = document.querySelector(".login-input-username");
const inputLoginPassword = document.querySelector(".login-input-password");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-username");
const inputClosePassword = document.querySelector(".form-input-password");
