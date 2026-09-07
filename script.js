const loanInp = document.getElementById("loanAmt");
const intInp = document.getElementById("intRate");
const monthsInp = document.getElementById("monthsToPay");

function CalculateMonthlyPay(event)
{
    const monthlyRate = intInp.value/100/12;
    const factor = (1 + monthlyRate) ** monthsInp.value;
    const payment = (loanInp.value * (monthlyRate * factor) / (factor - 1)).toFixed(2);
    
document.getElementById("EMI").innerHTML = 'Monthly Payment :'+ payment;
}

