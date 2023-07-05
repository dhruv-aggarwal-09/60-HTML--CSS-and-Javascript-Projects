const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondtEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const echangeRateEl= document.getElementById("exchange-rate")

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/0f36cb0a2bd9f499e8e49fed/latest/USD`)
}

currencyFirstEl.addEventListener("change", updateRate)

currencySecondtEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)

