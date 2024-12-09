document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault();

   
    const inputAmount = addMoneyId('input-add-money');
    const inputPinNumber = addMoneyId('input-pin-number');
    
    if(isNaN(inputAmount)){
        alert('failed to add  money');
        return;
    }

    if(inputPinNumber === 1234){
        const newBalance = getTextFieldValueById('amount-balance')
       const updateBalance =newBalance + inputAmount;
       document.getElementById('amount-balance').innerText= updateBalance;
       const p = document.createElement('p');
       p.innerText = `add money: ${inputAmount} tk new balance : ${newBalance}`
       document.getElementById('Transections-section').appendChild(p);
    }
    else{
        alert('wrong pin')
    }
})