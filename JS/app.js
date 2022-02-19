
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const valueInText = inputField.value;
  const value = parseFloat(valueInText);
  inputField.value = '';
  return value;
}

function getInnerTextValue(fieldId) {
  const fieldTag = document.getElementById(fieldId);
  const fieldValueInText = fieldTag.innerText;
  const value = parseFloat(fieldValueInText);
  return value;
}


// 
function updateBalance(amount, isAdding) {
  const previousBalance = getInnerTextValue('blance-total');
  let newBalance;

  if (isAdding == true) {
    newBalance = previousBalance + amount;
  }
  else {
    newBalance = previousBalance - amount;
  }

  document.getElementById('blance-total').innerText = newBalance;

}

function updateTotal(fieldId, amount) {
  const previousTotal = getInnerTextValue(fieldId);

  const newTotal = previousTotal + amount;

  document.getElementById(fieldId).innerText = newTotal;
}

document.getElementById('deposit-button').addEventListener('click', function () {
  const amount = getInputValue('deposit-input');
  if (amount > 0) {

    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
  }
});
// handlewithdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
  const amount = getInputValue('withdraw-input');
  const balance = getInnerTextValue('balance-total');

  if (amount > 0 && amount <= balance) {
    updateTotal('withdraw-total', amount);
    updateBalance(amount, false);
  }
})