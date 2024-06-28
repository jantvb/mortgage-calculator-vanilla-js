/*
* https://frontendeval.com/questions/mortgage-calculator
*
* Create a calculator that works out your monthly mortgage payment

P(r(1+r)^n/((1+r)^n)-1))

*/
function calculate() {
  const loanAmount = document.getElementById('loanAmount');
  const interestRate = document.getElementById('interestRate');
  const lengthLoan = document.getElementById('lengthLoan');

  const interestRateMonths = interestRate.value * 0.01 / 12;
  const loanMonth = lengthLoan.value * 12;

  const top = interestRateMonths * Math.pow(1 + interestRateMonths, loanMonth);
  const bottom = Math.pow(1 + interestRateMonths, loanMonth) - 1;

  const mortgage = Math.round(loanAmount.value * (top / bottom));

  const mortgageMsg = document.getElementById('mortgage-msg');
  mortgageMsg.textContent = `Your monthly mortgage payment will be $${new Intl.NumberFormat('en-US').format(mortgage)}`;
  mortgageMsg.classList.remove('hide');
}