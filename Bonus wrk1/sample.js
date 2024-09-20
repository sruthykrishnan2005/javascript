function calculateBonus() {
    const salary = parseFloat(document.getElementById("salary").value);
    const yearsOfService = parseInt(document.getElementById("yearsOfService").value);

    let bonus = 0;
    if (yearsOfService > 5) {
        bonus = salary * 0.05;
    }

    document.getElementById("result").innerText = `The net bonus amount is: $${bonus.toFixed(2)}`;
}