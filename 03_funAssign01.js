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
    console.log("My First Name:",firstName);
    console.log("My Last Name:",lastName);
    console.log("My College Name:",collegeName);

} 
personalDetails("Vashim","Nadaf","AITRC, Vita");

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

function swap(arg3,arg4) {
    console.log("===== Before Swap =====");
    console.log("1000:",arg3,"2000:",arg4);
    console.log("===== After Swap =====");
    var temp = arg3;
    arg3 = arg4;
    arg4 = temp;
    console.log("1000:",arg3,"2000:",arg4);
        
    }
    swap(1000,2000)

    console.log("========== Step - 4 ==========");

    function addThreeValues(n1,n2,n3) {
        console.log("Arguments: ", n1, n2, n3);
        var result = n1+n2+n3;
        console.log("Addition is: ", result);
    }
    addThreeValues(10.23,600,40);
    
console.log("********************************");
    addThreeValues("Hello", " Good", " Morning")   
    