console.log(`********** Step 1 **********`);
const array = [3,9,7,6,19,29,53]
function isPrime(num) {
  for (let index = 2; index < num; index++) {
    if (num%index==0) {
        return false;
    }
    
  }  
   return true; 
}

function countNumber(arr) {
    let count = 0;
    let primeArray=[];
    arr.forEach(element => {
       if (isPrime(element)) {
           count++
           primeArray.push(element);
       } 
    });
    console.log(`Prime Numbers: ${primeArray}`);
    console.log(`Count of Prime Numbers: ${count} `);
}
countNumber(array);

console.log(`********** Step 2 ***********`);

function spaceCount(str) {
    let count = 0;
    for (const iterator of str) {
        if (iterator==" ") {
            count++
        }
    }
    return count;
}
console.log(`Revision is the mother of Success : ${spaceCount("Rivision is the mother of Success")}`);
console.log(`Java Script is the language of internet world : ${spaceCount("Java Script is the laanguage of internet world")}` );