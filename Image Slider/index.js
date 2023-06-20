const nextEl= document.querySelector(".next")
const previousEl = document.querySelector(".prev")
const imagecontainerEl= document.querySelector(".image-container")
const imgsEls= document.querySelectorAll("img")

let currentImg= 1
let timeout;
nextEl.addEventListener("click", ()=>{
    currentImg++
    clearTimeout(timeout)
    updateImg()
})
previousEl.addEventListener("click", ()=>{
    currentImg--
    clearTimeout(timeout)
    updateImg()
})
updateImg()

function updateImg(){
    if (currentImg > imgsEls.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgsEls.length
    }
    imagecontainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`

    timeout= setTimeout(()=>{
        currentImg++
        updateImg()
    }, 3000)
}