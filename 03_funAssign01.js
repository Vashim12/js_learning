console.log(" ========== Step - 1 =========" );


function myName(){
    console.log("Vashim");
    
}
myName();

function myLastName() {
    console.log("Nadaf");
    
}
myLastName();


console.log(" ========== Step - 2 ==========");

 function personalDetails(firstName,lastName,collegeName){
    console.log("My First Name:Vashim");
    console.log("My Last Name:Nadaf");
    console.log("My College Name:AITRC,Vita");

} 
personalDetails("firstName,lastName,collegeName")

console.log("========== Step - 3 ==========");

function swapValues(arg1,arg2) {
console.log("===== Before Swap =====");
console.log("Virat:",arg1,"Anushka:",arg2);
console.log("===== After Swap =====");
var temp = arg1;
arg1 = arg2;
arg2 = temp;
console.log("Virat:",arg1,"Anushka:",arg2);
    
}
swapValues("Virat","Anushka");

console.log("********************************");

function swapValues(arg1,arg2) {
    console.log("===== Before Swap =====");
    console.log("1000:",arg1,"2000:",arg2);
    console.log("===== After Swap =====");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("1000:",arg1,"2000:",arg2);
        
    }
    swapValues(1000,2000)

    console.log("========== Step - 4 ==========");

    function addThreeValues(n1,n2,n3) {
        console.log("Arguments: ", n1, n2, n3);
        var result = n1+n2+n3;
        console.log("Addition is: ", result);
    }
    addThreeValues(10.23,600,40);
    
console.log("********************************");
    addThreeValues("Hello", " Good", " Morning")   
    