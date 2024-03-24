var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(`Step 1: Total Elements Available`);
console.log(`Total Elements are : ${arrayNumbers.length}`);
console.log(`-------------------------------------------------------`);

var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(`Step 2: First Element And Last Element`);
console.log(arrayNumbers);
const arraylength= arrayNumbers.length
const element0 = arrayNumbers[0];
console.log(`First Element : ${element0}`);
console.log(`Last Element : ${arrayNumbers[arraylength-1]}`);
console.log(`-------------------------------------------------------`);

var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(`Step 3: Third Last Element`);
console.log(arrayNumbers);
const thirdLastElement = arrayNumbers.length;
console.log(`Third Last Element Is : ${arrayNumbers[thirdLastElement-3]}`);

var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`*************** Step 4 ****************`);
console.log(arrayNumbers);
console.log(`All Even Numbers Of Array`);
for (const iterator of arrayNumbers) {
    if (iterator%2==0) {
        console.log(iterator);
    }
    
}

console.log(`**************** Step 5 ***************`);

console.log(`All Odd Numbers of Array`);
for (const iterator of arrayNumbers) {
    if (iterator%2!==0) {
        console.log(iterator);
    }
}

var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`************** Step 6 *************`);
console.log(arrayNumbers);
let sumEven=0;
for (const key in arrayNumbers) {
    if (key%2==0) {
        sumEven = sumEven + arrayNumbers[key];
        
    }
}
console.log(`Sum Of All Even Positioned Numbers : ${sumEven}`);

console.log(`*************** Step 7 ****************`);
let sumOdd=0;
for (const key in arrayNumbers) {
    if (key%2!==0) {
        sumOdd = sumOdd + arrayNumbers[key];
        
    }
}
console.log(`Sum Of All Odd Positioned Numbers : ${sumOdd}`);

var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`*************** Step 8 **************`);
console.log(arrayNumbers);
let sum=0;
for (const element of arrayNumbers) {
      sum = sum + element;
}
console.log(`Sum of All Elements From Array : ${sum}`);

console.log(`*************** Step 9 ****************`);
console.log(`The Numbers Which Are Multiple Of 5`);
for (const iterator of arrayNumbers) {
    if (iterator%5==0) {
        console.log(iterator);
    }
}

console.log(`************* Step 10 *************`);
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(arrayNumbers);
console.log(`Is Number 115 Available In Array Numbers :`);
console.log(arrayNumbers.includes(115));

console.log(`************* Step 10 *************`);
console.log(`Is Number 23 Available In Array Numbers :`);
console.log(arrayNumbers.includes(23));

console.log(`************* Step 11 *************`);
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
console.log(`-------------------------------------------------`);
arrayNumbers.splice(3, 0, 55, 66)
console.log(`After Inserting Numbers 55 and 66 At Index 3`);
console.log(arrayNumbers);

console.log(`************* Step 12 *************`);
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
const deleteElements = arrayNumbers.splice(4, 3);
console.log(`-------------------------------------------------`);
console.log(`Deleted Elements : ${deleteElements}`);
console.log(`-------------------------------------------------`);
console.log(`After deleting 3 elements starting from index 4`);
console.log(arrayNumbers);