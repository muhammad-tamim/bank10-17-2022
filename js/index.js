document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-field');
    const depositTotal = document.getElementById('deposit-total');
    const depositAmount = parseInt(depositInput.value)
    const depositTotalText = parseInt(depositTotal.innerText)
    depositTotal.innerText = depositTotalText + depositAmount;
    // console.log(depositTotalText);
    depositInput.value = "";

})