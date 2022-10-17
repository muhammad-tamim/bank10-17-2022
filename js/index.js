document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-field');
    const depositTotal = document.getElementById('deposit-total');
    const depositAmount = parseFloat(depositInput.value)
    const depositTotalText = parseFloat(depositTotal.innerText)
    depositTotal.innerText = depositTotalText + depositAmount;
    // update total balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // console.log(depositTotalText);
    depositInput.value = "";

})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawAmount = parseFloat(withdrawInput.value);
    const prevoiusWithdrawTotal = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = prevoiusWithdrawTotal + withdrawAmount;
    const balanceTotal = document.getElementById('balance-total');
    const prevoiusBalanceTotal = parseFloat(balanceTotal.innerText)
    balanceTotal.innerText = prevoiusBalanceTotal - withdrawAmount;
    withdrawInput.value = '';
})