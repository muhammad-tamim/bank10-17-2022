function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value)
    // clear input 
    inputField.value = "";
    return inputAmount;
}
function updateTotalFeild(Amount, totalFeildId) {
    const Total = document.getElementById(totalFeildId);
    const TotalText = parseFloat(Total.innerText)
    Total.innerText = TotalText + Amount;
    return Total;
}
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-field')
    const depositTotal = updateTotalFeild(depositAmount, 'deposit-total');
    // update total balance
    const balanceTotal = updateTotalFeild(depositAmount, 'balance-total')
})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-field');
    const withdrowTotal = updateTotalFeild(withdrawAmount, "withdraw-total")
    const balanceTotal = document.getElementById('balance-total');
    const prevoiusBalanceTotal = parseFloat(balanceTotal.innerText)
    balanceTotal.innerText = prevoiusBalanceTotal - withdrawAmount;
})