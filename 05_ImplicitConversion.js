// numeric string used with +gives string type 

result = '3' + 2;
console.log(result);

result = '3' + true;
console.log(result);

result = '3' + undefined;
console.log(result);

result = '3' + null;
console.log(result);

// if boolean is used,true is 1, false is 0


result = '4' - true;
console.log(result);

result = 4 + true;
console.log(result);

result = 4 + false;
console.log(result);

// numeric string used width -,/, * results number type



result = '4' - '2';
console.log(result);

result = '4'- 2;
console.log(result);

result = '4' * 2;
console.log(result);

result = '4' / 2;

//  Aritrhmetic operation of undefined with number, boolean or null gives NaN

result = 4 + undefined;
console.log(result);

result = 4 - undefined;
console.log(result);

result = true + undefined;
console.log(result);

result = null + undefined;
console.log(result);

// String to number

result = Number('324');
console.log(result);

result = Number('324e-1');
console.log(result);

// boolean to number

result = Number(true);
console.log(result);

result = Number(false);
console.log(result);