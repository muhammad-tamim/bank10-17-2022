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