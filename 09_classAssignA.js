console.log(`************* Step 1 **************`);
class Vehicles {
    name
    colour
    price
    mileage
    brand
    constructor(carName,carColour,carPrice,carMileage,carBrand){
        this.name=carName;
        this.colour=carColour;
        this.price=carPrice;
        this.mileage=carMileage;
        this.brand=carBrand
    }
    detail(){
        console.log(`Vehicle Details => Name: ${this.name}, Colour: ${this.colour}, Price: ${this.price}, Mileage: ${this.mileage}, Brand: ${this.brand}`);
    }

}
const legender = new Vehicles("Fortuner Legender","White","55 Lac","14.22 KM/L","Toyota");
legender.detail();
const crysta = new Vehicles("Innova Crysta","Black","27 Lacs", "12 KM/L", "Toyota");
crysta.detail();
const creta = new Vehicles("Creta","Black","20 Lacs","18.4 KM/L","Hyundai");
creta.detail();
const thar = new Vehicles("Thar","Black","20 Lacs","13 KM/L","Mahindra");
thar.detail();
const harrier = new Vehicles("Harrier","Blue","25 Lacs","16.8 KM/L","Tata");
harrier.detail();

console.log(`===== Traversing Array Object =====`);
const array = [legender,crysta,creta,thar,harrier];
for (const element of array) {
    element.detail();
}

console.log(`************ Step 2 ***************`);
class College {
    name
    branches
    university
    location
    constructor(collegeName,collegeBranches,collegeUniversity,collegeLocation){
        this.name=collegeName;
        this.branches=collegeBranches;
        this.university=collegeUniversity;
        this.location=collegeLocation;
    }
    detail(){
        console.log(`College Details => Name: ${this.name}, Branches: ${this.branches}, University: ${this.university}, Location: ${this.location}`);
    }
}
const aitrc = new College("AITRC",5,"DBATU","Vita");
aitrc.detail();
const wcoe = new College("WCOE",6,"SUK","Sangli");
wcoe.detail();
const coep = new College("COEP",11,"SBPU","Pune");
coep.detail();
const jspm = new College("JSPM",6,"SBPU","Pune");
jspm.detail();