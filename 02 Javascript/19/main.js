// Slice 
const arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2, 4)); //end parameter is not included, does not mutate the original array
console.log(arr);
console.log(arr.slice(1, -2));
console.log(arr.slice()) //copying whole array
console.log([...arr]); // copying whole array
console.log(arr.slice(-1)); // last element in an array
console.log(arr[arr.length - 1]); // value of last element
console.log(arr.flat(-1));

// splice
const arr2 = ["j", "k", "l", "m", "n"];

