function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value

    interestRateValue = document.getElementById("interest-rate").value

    MonthstoPayValue = document.getElementById("month-to-pay").value

    interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthstoPayValue

    monthlyPayment = (loanAmountValue / MonthstoPayValue + interest).toFixed(2)

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
}