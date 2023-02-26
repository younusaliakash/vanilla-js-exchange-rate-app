const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two =  document.getElementById('currency-two');
const amountEl_two =  document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap =  document.getElementById('swap');

//Update exchange rate at DOM

function updateRate () {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then( res => res.json())
    .then(data => {
        console.log(data)

        const rate = data.rates[currency_two]

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
    })
}

//Event Listeners
currencyEl_one.addEventListener('change', updateRate);
amountEl_one.addEventListener('input', updateRate);
currencyEl_two.addEventListener('change', updateRate);
amountEl_two.addEventListener('input', updateRate);

//swap
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = temp

    updateRate()
})

updateRate()

// swap.addEventListener('click', () => {
//   const temp = currencyEl_one.value;
//   currencyEl_one.value = currencyEl_two.value;
//   currencyEl_two.value = temp;
//   caclulate();
// });

// caclulate();
