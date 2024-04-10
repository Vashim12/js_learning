class Person{
    name
    city
    age
    constructor(myName,myCity,myAge){
        this.name = myName;
        this.city = myCity;
        this.age = myAge;
    }
    detail(){
        console.log(`Person Details => Name: ${this.name}, City: ${this.city},Age: ${this.age} `);
    }
}
const jenny = new Person("Jenny","Pune",22);
jenny.detail(); 
const bill = new Person("Bill","Mumbai",24)
bill.detail();
const elon=new Person("Elon","LA",38);
elon.detail();
const stew = new Person("Stew", "Pune", 58);
const arrayPerson = [jenny,bill,elon,stew];

console.log(`***** WAP to get employee from city - 'Pune *****`);
arrayPerson.forEach(element => {
    if (element.city=="Pune") {
        element.detail();
    }
});

console.log(`===== WAP to get the average age  ======`);

let sumAge = 0;

arrayPerson.forEach(person => {

    sumAge = sumAge + person.age;

});

let averageAge = sumAge/arrayPerson.length;

console.log(`Average age: ${averageAge}`);