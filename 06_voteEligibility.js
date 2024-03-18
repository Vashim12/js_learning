function voteEligible(age) {
    if (age==null  ||  age<=0  || isNaN(+age)  || age>130) {
        console.log(`Invalid Input: ${age}`);
        }else{
            if (age<18) {
               console.log(`Your Age is ${age}: You Are Not Eligible For Vpte`); 
            }else{
                if (age>=18) {
                    console.log(`Your Age is ${age}: You Are Eligible For Vote`);
                }
            }
        }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);