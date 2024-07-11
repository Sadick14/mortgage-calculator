function calculateMortgage() {
    let P = parseFloat(document.getElementById("amount").value);
    let term = parseInt(document.getElementById("terms").value); // Note the change from 'term' to 'terms'
    let rate = parseFloat(document.getElementById("rate").value) / 100;
    
    let r = rate / 12;
    let t = term * 12;

    if (isNaN(P) || isNaN(term) || isNaN(rate)) {
        document.getElementById("error").innerHTML = "Please provide valid inputs for amount, term, and rate.";
        document.getElementById("new-error").style = "background-color:red;"
        return;
    }
    
    // Get the selected mortgage type
    let mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;
    
    let M;
    if (mortgageType === "repayment") {
        // Repayment mortgage calculation
        M = P * r * Math.pow(1 + r, t) / (Math.pow(1 + r, t) - 1);
        document.getElementById("pay").innerHTML = "Your monthly repayments"
        document.getElementById("tot").innerHTML = "Your Total monthly repayments"

    } else if (mortgageType === "interest-only") {
        // Interest-only mortgage calculation
        M = P * r;
        document.getElementById("pay").innerHTML = "Your monthly interest"
        document.getElementById("tot").innerHTML = "Your Total monthly interest"


    }
    
    document.querySelector(".card h1").innerHTML = "$ " + M.toFixed(2);

    let totalAmount = M * t;
    document.getElementById("total").innerHTML = " $ " + totalAmount.toFixed(2);
}   

