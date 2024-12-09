function addMoneyId(id){
    const textValue = document.getElementById(id).value;
   const inputNumber = parseFloat(textValue);
    return inputNumber;

}

function getTextFieldValueById(id){
    const textFieldValueById = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(textFieldValueById);
    return balanceNumber;
}
function showSectionId(id){
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('Transections-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}