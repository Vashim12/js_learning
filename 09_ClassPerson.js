class Person {

    constructor(name, city, age){

        this.name = name;

        this.city = city;

        this.age = age;

    }

    detail(){

        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);

    }

}

const jenny = new Person("Jenny", "Pune", 22);

const bill = new Person("Bill", "Mumbai", 24);

const elon = new Person("Elon", "LA", 38);

const stew = new Person("Stew", "Pune", 58);

 

const arrayPerson = [jenny, bill, elon, stew];

const arrayNames = arrayPerson.map( (employee)=>{

    return employee.name;

} );

console.log(arrayNames)

