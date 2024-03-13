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
var lengthBeforeTrim = greet.length
console.log(`${greet} it's length is : ${lengthBeforeTrim}`);

var greetAfterTrim = greet.trim();
var lenthAfterTrim =  greetAfterTrim.length;
console.log(`${greetAfterTrim} it's length is : ${lenthAfterTrim}`);

console.log(`Total spaces removed is: ${lengthBeforeTrim-lenthAfterTrim}`);

console.log(`=========== includes ==========`);

var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word of char 'nin':${result}`);

var result = greet.includes("Mor");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log(`========== search() ==================`);

var greet = "Good Morning";

var result = greet.search("Morning");

console.log(`'Morning' is available at ${result}`);

 

var result = greet.search("r");

console.log(`'r' is available at ${result}`);

console.log(`========== slice() ==================`);

var greet = "Good Morning";

var result = greet.slice(3, 6);

console.log(`Slice is ${result}`);

console.log(`========== split() ==================`);

var greet = "Good Morning";

var resultValue = greet.split(" ")

console.log(resultValue);

console.log(`Total words are: ${resultValue.length}`);

// Write a function with name totalWord() with one arguments

//  "I am happy Buddy" 

//  "I am learning JS the language of internet"

// and this function should return the total numbers of words

 

function totalWord(sentence){
var words = sentence.split(" ");
var totalWords = words.length;
return totalWords
}

var totalWords = totalWord("I am happy Buddy");
console.log(`"I am happy Buddy". Total number of words is: ${totalWords}`);
var totalWords = totalWord("I am learning JS the language of internet");
console.log(`"I am learning JS the language of internet". Total number of words is: ${totalWords}`);