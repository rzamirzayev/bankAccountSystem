let balance = 0;
const transactionHistory = [];

function deposit() {
  const depositAmount = parseFloat(document.getElementById("deposit").value);
  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Lütfen geçerli bir tutar girin.");
    return;
  }
  balance += depositAmount;
  addToTransactionHistory("Yatırıldı", depositAmount);
  displayBalance();
  displayTransactionHistory();
}

function withdraw() {
  const withdrawAmount = parseFloat(document.getElementById("withdraw").value);
  if (
    isNaN(withdrawAmount) ||
    withdrawAmount <= 0 ||
    withdrawAmount > balance
  ) {
    alert("Lütfen geçerli bir tutar girin.");
    return;
  }
  balance -= withdrawAmount;
  addToTransactionHistory("Çekildi", withdrawAmount);
  displayBalance();
  displayTransactionHistory();
}

function displayBalance() {
  document.getElementById("display-balance").innerHTML = balance.toFixed(2);
}

function addToTransactionHistory(type, amount) {
  const date = new Date();
  const transaction = {
    type,
    amount,
    date: date.toLocaleString(),
  };
  transactionHistory.push(transaction);
}

function displayTransactionHistory() {
  const transactionList = document.getElementById("transaction-history");
  transactionList.innerHTML = "";
  for (let i = 0; i < transactionHistory.length; i++) {
    const transaction = transactionHistory[i];
    const listItem = document.createElement("li");
    const date = transaction.date;
    const type = transaction.type;
    const amount = transaction.amount.toFixed(2);
    listItem.innerHTML = `${date} - ${type}: ${amount}`;
    transactionList.appendChild(listItem);
  }
}
