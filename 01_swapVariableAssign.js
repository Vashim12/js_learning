console.log("========== Swap Two Variable Value ==========");

var name1 = "Sweety";
var name2 = "Cutie";
console.log("====== Before Swap ======");
console.log("sweety:",name1,"cutie:",name2);

console.log("====== After Swap ======");
var temp = name1;
name1 = name2;
name2 = temp;
console.log("sweety:",name1,"cutie:",name2);


console.log("========== Swap Three Variable Values ==========");
var n1 = 10;
var n2 = 20;
var n3 = 30;
console.log("===== Before Swap =====");
console.log("n1:", n1,"n2:", n2, "n3:", n3);

console.log("===== After swap =====");
var temp = n1;
n1 = n2;
var temp1 = n2;
n2 = n3;
n3 = temp;
console.log("n1:", n1, "n2:", n2, "n3:",n3);
;
