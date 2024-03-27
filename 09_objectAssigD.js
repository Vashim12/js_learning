let professor = {
   name :"Bill",
   age :30,
   subject:"English",
   college:"SBPU, Pune",
   country:"India",
   degrees: {
        Engineering :'CSC',
        PHD: 'Adv Computing',
       },
   certificates : ['Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Adv Programming'],
   
}

  
  professor.totalExperience = "14 years",
  console.log(professor);
  console.log(`========== Degrees ===========`);
  console.log(professor.degrees);

  console.log(`========== Certificates ==========`);
  professor.certificates.splice(2,0,"Oracle Cerified");
  console.log(professor.certificates); 
   console.log(`=========== Traversing Array ===========`);
   const arrayCertificates = professor.certificates;
  for (let index = 0; index < arrayCertificates.length; index++) {
    const element = arrayCertificates[index];
    console.log(element);
}
  


