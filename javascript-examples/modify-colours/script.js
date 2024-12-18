const button = document.getElementById("change-colour")
const colourBox = document.getElementById("colour-box")

button.addEventListener("click", () => {
    if (colourBox.style.backgroundColor === "red") {

        colourBox.style.backgroundColor = "blue";

    } else {

        colourBox.style.backgroundColor = "red";
    }

});



