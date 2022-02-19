
// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {

  // get the Ammount deposited

  const depositInput = document.getElementById('deposit-input');
  const newDepositAmountText = depositInput.value;
  // console.log(depositAmmount);
  const newDepositeAmount = parseFloat(newDepositAmountText);

  // update deposit total
  const depositTotal = document.getElementById('deposit-total');

  const previousDepositText = depositTotal.innerText;
  const previousDepositAmmount = parseFloat(previousDepositText);

  const newDepositTotal = previousDepositAmmount + newDepositeAmount;

  depositTotal.innerText = newDepositTotal;

  // update account Blance
  const balanceTotal = document.getElementById('blance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositeAmount;

  balanceTotal.innerText = newBalanceTotal;

  // clear the deposit Input field
  depositInput.value = '';
});



// handle withdraw Event handelar

document.getElementById('withdraw-button').addEventListener('click', function () {
  const withdrawInput = document.getElementById('withdraw-input');

  const withdrawAmountText = withdrawInput.value;

  const newWithdrawAmount = parseFloat(withdrawAmountText);
  console.log(withdrawAmountText);

  // srt withdraw Total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawText);


  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotal.innerText = newWithdrawTotal;

  // update blance
  const blanceTotal = document.getElementById('blance-total');
  const previousBalanceText = blanceTotal.innerText;
  const previousBlaneTotal = parseFloat(previousBalanceText);
  const newBlanceTotal = previousBlaneTotal - newWithdrawAmount;

  blanceTotal.innerText = newBlanceTotal;

  // clear withdraw input
  withdrawInput.value = '';
})