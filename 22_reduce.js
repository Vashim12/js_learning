let array = [2, 4, 1, 7, 8, 9];

 

const sum = array.reduce((runningTotal, currentValue)=>{

 return runningTotal+currentValue;

}, 0);

console.log(sum);