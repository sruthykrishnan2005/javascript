function getMonument() {
   let a= document.getElementById("city").Value;
   let monument;
   if (a === "Delhi"){
    monument = "Red Fort";
   }
   else if (a === "Agra"){
    monument = "Taj Mahal";
   }
   else if (a === "Jaipur"){
    monument ="Jal Mahal";
   }
   else{
    monument = "Monument not found for the entered city"; 
   }
   document.getElementById('result').innerText = `Monument: ${monument}`;
}
   
   
   