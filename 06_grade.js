function gradeCalculation(marks){
    // invalid inputs
   if (marks==null  ||  marks<=0  || isNaN(+marks)  || marks>100) {
    console.log(`Invalid Input: ${marks}`);
    }else{
        
    }
       if (marks>=90 && marks<100) {
       console.log(`Funtastic Marks ${marks}: Your Grade Is A+`); 
    }else{
        if (marks>=75 && marks<90) {
            console.log(`Excellent Marks ${marks}: Your Grade Is A`);
        }else{
            if (marks>=50 && marks<75) {
                console.log(`Good Marks ${marks}: Your Grade Is B`);
            }else{
                if (marks>=35 && marks<50) {
                    console.log(`Need Improvement ${marks}: Your Grade IS C`);
                }else{
                    if (marks<35 && marks>0) {
                        console.log(`Your Marks Are ${marks}: You Are Failed.Better Luck Next Time`);
                    }

                    
                }
            }
        }
    }
    
       
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation(null);
gradeCalculation(0);
gradeCalculation(-20);
gradeCalculation("Seventy"); // NaN
gradeCalculation("70"); // 70