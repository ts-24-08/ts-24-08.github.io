const text = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener("click", ()=>{
    if(text.style.display === "block" ){
        text.style.display = "none";
    } else{
        text.style.display = "block";
    }
})