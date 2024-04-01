console.log(`************** Object1 **************`);
const bankSbi = {
    name: "State Bank Of India",
    city: "Pune",
    branch:"Wakad",
    establishment:"2001",
}
console.log(bankSbi);

console.log(`************* Object 2 ***************`);
const bankLocation = {
    street:"16 Number",
    city:"Wakad",
    pin:"411 033",
}
console.log(bankLocation);

console.log(`*************** Cloning Objects **************`);
console.log(`---------- Object 1 ----------`);
const cloneObjet = Object.assign({}, bankSbi);
console.log(cloneObjet);

console.log(`---------- Object 2 ----------`);
const objetClone = Object.assign({}, bankLocation);
console.log(objetClone);

console.log(`***************** Object 3 *************`);
const rateOfInterest = {
    homeLoanInterest:"8.45%",
    personalLoanInterest:"13.07%",
    dualInterest:"12.69%",
}
console.log(rateOfInterest);

console.log(`************* Merge All Objects **************`);

const bankDetails = Object.assign({}, bankSbi, bankLocation,rateOfInterest);
console.table(bankDetails);

console.log(`************** Traverse After Merge **************`);

const mergedObject = bankDetails
for (const key in bankDetails) {
    console.log(`${key}:${bankDetails[key]}`);
}