const text = document.getElementById("text");
const button = document.getElementById("change-text");

button.addEventListener("click", ()=>{
    if(text.textContent === "Hallo Welt!" ){
        text.textContent = "Hallo JavaScript!";
    } else{
        text.textContent = "Hallo Welt!";
    }
})