console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Gajanan";

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} `);

console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(`========== trim() ==================`);
var greet = "      Good Morning       ";
console.log(`${greet} it's length is : ${greet.length}`);
var len = greet.length;
console.log(greet.trim(greet)); 


console.log(`========== include() ==================`);
var greet =" My Name is Vashim ";
console.log(greet.includes("Vashim"));

console.log(`========== slice() ==================`);
slice(start,end)
var greet = "Developers World!";
console.log(greet.slice(0,10));