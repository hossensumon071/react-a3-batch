const friends = ["shohan", "badhon", "eklas", "nasim"]; // letreal synatx

const years = new Array(1990, 1992, 1996, 1998, 2002); // array function

console.log(friends[1]);
console.log(friends.length);

// push - add element at the end 
// unshift - add element at the beginning
// pop - remove element from the end
// shift - remove element from the beginning
// indexOf - finding index by element name
// inludes - includes return boolean number true or false jodi thake tahole true return orbe other wise false return korbe

const lastBanchers = ["shohan", "shuvo", "abdullah", "rakib"]

lastBanchers.push("abir");
lastBanchers.push("sajib");
lastBanchers.unshift("bubli");
lastBanchers.pop();
lastBanchers.shift();
lastBanchers.indexOf("shohan");
lastBanchers.includes("rakib"); 

if (lastBanchers.includes("pinky")){
    console.log("He is our captin.")
} else {
    console.log("Unknown")
}

if (lastBanchers.indexOf("shuvo") !== -1) {
    console.log("He is our captin");
}


/* 
2 teams: lionsclub, dargoncalub
team members: 5 per team
lionsClub (14, 12, 17, 9, 11)
dragonClub(18, 13, 10, 8, 12)

conditions: 
winner: avergae jump distance >= 15
drop : lions === dragon, both teams has >= 15
*/

const socreLions = (14 + 13 + 17 + 15 + 16) / 5;
console.log(socreLions);
const scoreDragons = (18 + 13 + 10 + 8 + 12) / 5;
console.log(scoreDragons);

if(socreLions === scoreDragons && socreLions >= 15 && scoreDragons >= 15) {
    console.log("Draw!");
} else if (socreLions > scoreDragons && socreLions >= 15) {
    console.log("Winner is lions!");
} else if (scoreDragons > socreLions && scoreDragons >= 15) {
    console.log("Winner is dragons!")
}


// currying functions
function multi(a) {
    return function (b) {
        return function (c) {
            return function (x) {
                return function (y) {
                    return a * b * c * x * y
                }
            }
        }
    }
}

console.log(multi(10)(5)(7)(20)(13));