const btnEl= document.getElementById("btn")
const apiKey = "883KCpzkF+w0tkZboXkC5A==wFNZHcpT2CBHIsGX"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    const response = await fetch(apiURL, options)
    const data = await response.json()

    console.log(data);
}

btnEl.addEventListener("click", getJoke)