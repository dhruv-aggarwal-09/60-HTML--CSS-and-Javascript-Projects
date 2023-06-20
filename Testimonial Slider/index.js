const testimonials= [
    {
        name: "Ashlie T",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "We've seen amazing results already. I would also like to say thank you to all your staff. Thanks for the great service. Thank you so much for your help."
    },
    {
        name: "Silvan V",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "Best. Product. Ever! I would like to personally thank you for your outstanding product. Apple is both attractive and highly adaptable."
    },
    {
        name: "Vail G",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Apple has completely surpassed our expectations. It's exactly what I've been looking for. I would be lost without apple."
    },
    {
        name: "Danika Z",
        photoUrl: "https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "I have gotten at least 50 times the value from apple. I made back the purchase price in just 48 hours! Apple is the next killer app."
    },
    {
        name: "Dore G",
        photoUrl: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "I like apple more and more each day because it makes my life a lot easier. You've saved our business! Apple did exactly what you said it does. If you aren't sure, always go for apple."
    },
];

const imgEl= document.querySelector("img")
const textEl= document.querySelector(".text")
const usernameEl= document.querySelector(".username")


let idx= 0;
updateTestimonial()
function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx]
    imgEl.src= photoUrl; 
    textEl.innerText= text;
    usernameEl.innerText= name;
    idx++
    if(idx=== testimonials.length){
        idx= 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },10000)
}