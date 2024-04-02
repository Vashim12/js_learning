class Student{
    rollNumber
    name
    division
    constructor(myRole,myName,myDivision){
        this.rollNumber = myRole;
        this.name = myName;
        this.division = myDivision;
    }

    detail(){
        console.log(`Roll Number:${this.rollNumber}, Name:${this.name}, Division:${this.division}`);
    }
}
const bill = new Student(105,"Ram","D");
bill.detail();
const modi = new Student(400, "Modi","A")
modi.detail();
const dhoni = new Student(7,"Dhoni","A")
dhoni.detail();
console.log(`===== Traversing Array Object =====`);
const array = [bill,modi,dhoni];
for (const element of array) {
    element.detail();
}