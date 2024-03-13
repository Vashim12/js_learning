function stringHandsOn() {
  var sentence = "   Hey you are doing good, keep it up   ";
  console.log(`Step 1:Given string is:${sentence}`);
  console.log(`----------------------------`);

  console.log(`Step 2:The length of the string is :${sentence.length}`);
  console.log(`----------------------------`);
 
}
stringHandsOn()
var sentence = "   Hey you are doing good, keep it up   ";


var sentenceAfterTrim = sentence.trim();
var lenthAfterTrim =  sentenceAfterTrim.length;
console.log(`Step 3:${sentenceAfterTrim} it's length is : ${lenthAfterTrim}`);

console.log(`----------------------------`);

console.log(`Step 4: Total spaces removed is: ${sentence.length-lenthAfterTrim}`);
console.log(`----------------------------`);

var totalChars =sentenceAfterTrim.length;
var charAt0  = sentenceAfterTrim.charAt(0);
var lastChar = sentenceAfterTrim.charAt(totalChars-1)
console.log(`Step 5:First Character is:${ charAt0} And  Last Character is:${lastChar}`);
console.log(`----------------------------`);

var resultValue = sentenceAfterTrim.split(" ")
console.log(`Step 6:${resultValue}`);
console.log(`Total words are: ${resultValue.length}`);
console.log(`----------------------------`);

var indexOfgood =sentenceAfterTrim.indexOf('good');
console.log(`Step 7:Index of word good is:${indexOfgood}`);
console.log(`----------------------------`);

var str = sentenceAfterTrim;
console.log(`Step 8:Substring strating from index 22 is:`,str.substring(22));
console.log(`----------------------------`);

var result = sentenceAfterTrim.includes("up");
console.log(`Step 9:Is string ends with word "up":${result}`);
console.log(`----------------------------`);

var result = sentenceAfterTrim.includes("Hey");
console.log(`Step 10:Is string starts with word "Hey":${result}`);


