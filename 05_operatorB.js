console.log(`------------- Step 1 ------------`);
function greaterNumber(arg1,arg2) {
    var result = (arg1>arg2)? arg1:arg2;
    
    console.log(`Greatest Number Among ${arg1} and ${arg2}is: ${result}`);
;
    
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`------------- Step 2 ------------`);
function isEvenOrOddNum(number) {
    var result = number%2==0 ? "true": "false";
    console.log(`(Given number is Even):${result}`);
  
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(101);
isEvenOrOddNum(0);
console.log(`------------- Step 3 ------------`);
function wordlength(word) {
    var result = word.length%2==0 ? "EVEN ": "ODD";
    console.log(`Given word ${word} is with: ${result}` );
}
wordlength("JavaScript");
wordlength("Developer");
wordlength("Google");

