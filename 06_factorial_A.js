function factorial(num){
    let fact = 1;
    for (let index = num; index >= 1; index--) { 
        fact = fact * index;
    }
    
    if (num==null || num==undefined) {
     fact= `invalid input`
    }
    console.log(`Factorial of ${num} is : ${fact}`);  
}
factorial(5);
factorial(3);
factorial(null);
factorial(8);
factorial(undefined);
factorial(9);
factorial(0);