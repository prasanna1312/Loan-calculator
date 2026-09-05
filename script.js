const loanInp = document.getElementById("loanAmt");
const intInp = document.getElementById("int-rate");
const monthsInp = document.getElementById("monthsToPay");

function CalculateMonthlyPay(event)
{
    let monthly_rate = intInp.value/100/12;
    let factor = (1 + monthly_rate) ** monthsInp.value;
    let payment = (loanInp.value * (monthly_rate * factor) / (factor - 1)).toFixed(2);
    
document.getElementById("EMI").innerHTML = 'Monthly Payment :'+ payment;
}

