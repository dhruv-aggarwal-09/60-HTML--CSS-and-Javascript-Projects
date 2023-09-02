const btnEl= document.getElementById("btn");


function fetchImage(){
    const inputValue = document.getElementById("input").value
    fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=4AZ-bGv3pcsa8g1rSbC9Bc93CZPHsdqF6DPK_n1eQfM`).then((res)=>res.json().then((data)=>{
        console.log(data);
    })
    );
};

btnEl.addEventListener("click", fetchImage())