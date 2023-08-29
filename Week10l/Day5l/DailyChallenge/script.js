const apiKey = "54cf9d641c60aeaf56091d10";
const convertBtn = document.getElementById("convertBtn");
const switchBtn = document.getElementById("switchBtn");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", convertCurrency);
switchBtn.addEventListener("click", switchCurrencies);

async function convertCurrency() {
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const convertedAmount = data.conversion_result.toFixed(2);
    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

function switchCurrencies() {
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;

  document.getElementById("from").value = toCurrency;
  document.getElementById("to").value = fromCurrency;
  resultDiv.textContent = "";
}

// https://app.exchangerate-api.com/
// https://www.exchangerate-api.com/docs/supported-codes-endpoint