let array = [2, 4, 1, 7, 8];

 

let arrayTransform = [];

array.forEach(element => {

    arrayTransform.push(element+10);

});

 

console.log(array);

console.log(arrayTransform);

 

const arrayNew = array.map( (currentValue)=>{

    return currentValue+10;

} );

 

console.log(arrayNew);

 

const arraySquare = array.map( (currentValue)=>{

    return currentValue * currentValue;

} );

console.log(arraySquare);