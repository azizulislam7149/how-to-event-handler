document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = addMoneyId('input-cash-out');
    const pinNumber = addMoneyId('input-cash-out-pin-number');
    console.log(cashOut, pinNumber);
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('amount-balance')
        const updateBalance = balance - cashOut;
        document.getElementById('amount-balance').innerText = updateBalance;
    }
    else{
        alert('wrong pin number');
    }
})