const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondtEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl= document.getElementById("exchange-rate")

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/0f36cb0a2bd9f499e8e49fed/latest/${currencyFirstEl.value}`
    )
    .then((res)=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySecondtEl.value];
        // console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondtEl.value}`;

        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)

})
}

currencyFirstEl.addEventListener("change", updateRate)

currencySecondtEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)

