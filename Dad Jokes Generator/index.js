const btnEl= document.getElementById("btn")
const apiKey = "883KCpzkF+w0tkZboXkC5A==wFNZHcpT2CBHIsGX"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },
};

function getJoke(){

}

btnEl.addEventListener("click", getJoke)