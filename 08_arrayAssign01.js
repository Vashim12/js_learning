var array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(array);

console.log(`Step 1 : Log First And Last Element `);
const arraylength= array.length
const element0 = array[0];
console.log(`First Element : ${element0}`);
console.log(`Last Element : ${array[arraylength-1]}`);
console.log(`--------------------------------------------------------------------------`);

var array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Step 2 : Papaya Before Banana`);
console.log(array);
array.unshift("Papaya")
console.log(array);
console.log(`--------------------------------------------------------------------------`);
var array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Step 3 : Remove Mango`);
console.log(array);
const removeElements = array.splice(3, 1);
console.log(removeElements);
console.log(array);
console.log(`--------------------------------------------------------------------------`);
var array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Step 4 : Insert Pineapple at last position`);
console.log(array);
array.push("Pineapple")
console.log(array);
console.log(`--------------------------------------------------------------------------`);
var array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Step 5 : Dragon Fruit Before Water Melon`);
console.log(array);
const addElement = array.splice(4,0,"Dragon Friut")
console.log(addElement);
console.log(array);
console.log(`--------------------------------------------------------------------------`);
var array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Step 6 : Replace Orange With Kiwi`);
console.log(array);
const addFruit = array.splice(1,1,"Kiwi");
console.log(addFruit);
console.log(array);
console.log(`--------------------------------------------------------------------------`);
var array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Step 7 : Index 1 to 4`);
console.log(array);
 const slice =array.slice(1,5);
 console.log(slice);
 console.log(`--------------------------------------------------------------------------`);

var array = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Step 8 : Last 3 Elements`);
console.log(array);
const len =array.length
const sliceLog =array.slice(len-3)
console.log(sliceLog);