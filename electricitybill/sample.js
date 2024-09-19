function CalculateElectricityBilll(units){
    let billAmount=0;
    if(units <= 100){
        billAmount = 0;
    }
    else if(units<=200){
        billAmount =(units - 100) * 5;
    }
    else{
        billAmount = (100 * 5) + ((units - 200)*10);
    }
    return billAmount;

}
function calculateBill(){
    const unitsInput =document.getElementById('units').Value;
    const units =parseInt(unitsInput,10);
    if (!isNaN(units)&& units >=0){
        const totalBill = calculateElectricityBill(units);
        document.getElementById('result').innerHTML='Total electricity bill for ${units} units is:Rs ${totalBill}';
    }
    else{
        document.getElementById('result').innerHTML= 'please enter a valid number of units.';
    }
}