console.log(`------------- Step 1 ------------`);
function greaterNumber(arg1,arg2) {
    var result = (arg1>arg2)? arg1:arg2;
    
    console.log(`Greatest Number Among ${arg1} and ${arg2}is: ${result}`);
;
    
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`------------- Step 2 ------------`);
function isEvenOrOddNum(arg) {
    var result =arg %2==0? "true(given number is even)" : "false (given number is odd)";
    
    return result;
     
 }
 console.log(isEvenOrOddNum(29));
 console.log(isEvenOrOddNum(44));
 console.log(isEvenOrOddNum(0));
 console.log(isEvenOrOddNum(101));

 console.log(`------------- Step 3 ------------`);
function wordlength(word) {
    var result = word.length%2==0 ? "EVEN ": "ODD";
    console.log(`Given word ${word} is with: ${result}` );
}
wordlength("JavaScript");
wordlength("Developer");
wordlength("Google");

