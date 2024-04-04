const person =`
{
  "name": "Aleix Melon",
  "id": "E00245",
  "role": ["Dev", "DBA"],
  "age": 23,
  "doj": "11-12-2019",
  "married": false,
  "address": {
    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
  },
  "referred-by":"E0012"
}`;


const personObject = JSON.parse(person);
console.log(typeof personObject);
console.log(personObject);

console.log(`=========== Log on console - Dev ==========`);
console.log(personObject.role[0]);

console.log(`========= Log only last name - Melon ==========`);
const result = personObject.name.split(' ')
const second = result[1]
console.log(second);

console.log(`========= Log only joining year of employee - 2019 ==========`);

const last = personObject.doj.split('-')
const third = last.length;
console.log(`${last[third-1]}`);
