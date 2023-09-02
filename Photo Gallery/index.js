const btnEl= document.getElementById("btn");


function fetchImage(){
    const inputValue = document.getElementById("input").value
    fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1`)
};

btnEl.addEventListener("click", fetchImage())