function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value)
    // clear input 
    inputField.value = "";
    return inputAmount;
}
function getCurrentValue(totalFeildId) {
    const Total = document.getElementById(totalFeildId);
    const TotalText = parseFloat(Total.innerText)
    return TotalText;
}
function updateDepoWithdrowTotalBalance(Amount, totalFeildId, isAdd) {
    const Total = document.getElementById(totalFeildId);
    const TotalText = getCurrentValue(totalFeildId)
    if (isAdd == true) {
        Total.innerText = TotalText + Amount;
    } else {
        Total.innerText = TotalText - Amount;
    }
    return Total;
}
document.getElementById('btn-deposit').addEventListener('click', function () {
    //Find deposit-field value and convart number
    const depositAmount = getInputValue('deposit-field')
    // Handel NaN error and negetive value error
    if (depositAmount > 0) {
        // Find deposit-total value and sum depositAmount 
        const depositTotal = updateDepoWithdrowTotalBalance(depositAmount,
            'deposit-total', true);
        // Find balance-total value and sum depositAmount 
        const balanceTotal = updateDepoWithdrowTotalBalance(depositAmount,
            'balance-total', true)
    } else {
        prompt('Plz , Give me positive number.')
    }
})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //Find withdraw-field value and convart number
    const withdrawAmount = getInputValue('withdraw-field');
    const balanceTotal = getCurrentValue('balance-total');
    // Handel negetive error and NaN error
    if (balanceTotal < withdrawAmount) {
        prompt('You have onlay balance.', balanceTotal)
    }
    else if (withdrawAmount > 0) {
        // Find withdraw-total value and sum depositAmount 
        const withdrowTotal = updateDepoWithdrowTotalBalance(withdrawAmount,
            "withdraw-total", true)
        // Find balance-total value and sum depositAmount 
        const balanceTotal = updateDepoWithdrowTotalBalance(withdrawAmount,
            'balance-total', false)
    } else {
        prompt('Plz , Give me positive number.')
    }
})