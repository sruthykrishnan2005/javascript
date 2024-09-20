function sample() {
    i = parseInt(document.getElementById("enterno").value);
   result = 1;

   if (i < 0) {
       console.log("Factorial is not defined for negative numbers.");
       return; 
   } else if (i === 0) {
       console.log("Factorial of 0 is 1.");
       return; 
   }

   
   do {
       result *= i; 
       console.log(i);
       i--;
   } while (i > 0);

   
   console.log(result);
}


   
    

