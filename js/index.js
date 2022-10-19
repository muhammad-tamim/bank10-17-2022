function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value)
    // clear input 
    inputField.value = "";
    return inputAmount;
}
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositTotal = document.getElementById('deposit-total');
    const depositAmount = getInputValue('deposit-field')

    const depositTotalText = parseFloat(depositTotal.innerText)
    depositTotal.innerText = depositTotalText + depositAmount;
    // update total balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // console.log(depositTotalText);

})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawAmount = getInputValue('withdraw-field');
    const prevoiusWithdrawTotal = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = prevoiusWithdrawTotal + withdrawAmount;
    const balanceTotal = document.getElementById('balance-total');
    const prevoiusBalanceTotal = parseFloat(balanceTotal.innerText)
    balanceTotal.innerText = prevoiusBalanceTotal - withdrawAmount;
})