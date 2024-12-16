const nameContainer = document.getElementById("name-container");
const nameInput = document.getElementById("pet-name-input");
const setNameButton = document.getElementById("set-name");
const avatarElements = document.querySelectorAll(".avatar");
const displayName = document.getElementById("display-name");
const displayAvatar = document.getElementById("display-avatar");
const statusArea = document.getElementById("status-area");

const hungerBar = document.getElementById("hunger-bar");
const energyBar = document.getElementById("energy-bar");
const moodBar = document.getElementById("mood-bar");

let petName = "";
let petAvatar = "";

let hunger = 50;
let energy = 80;
let mood = 60;

setNameButton.addEventListener("click", () => {
    const inputName = nameInput.value.trim();
    if (inputName === "") {
        alert("Bitte gib deinem Tamagotchi einen Namen!");
        return;
    }
    petName = inputName;
    displayName.textContent = `Name: ${petName}`;
    nameInput.value = "";
    checkSetupComplete();
});

avatarElements.forEach((avatar) => {
    avatar.addEventListener("click", () => {
        avatarElements.forEach((a) => a.classList.remove("selected"));
        avatar.classList.add("selected");
        petAvatar = avatar.getAttribute("src");
        displayAvatar.setAttribute("src", petAvatar);
        checkSetupComplete();
    });
});

function checkSetupComplete() {
    if (petName && petAvatar) {
        alert(`${petName} ist bereit!`);
        statusArea.classList.remove("hidden");
        nameContainer.classList.add("hidden");
        startStatusUpdate();
    }
}

function updateStatusBars() {
    hungerBar.style.width = `${hunger}%`;
    energyBar.style.width = `${energy}%`;
    moodBar.style.width = `${mood}%`;

    if (hunger >= 100) {
        alert(`${petName} ist vor Hunger gestorben!`);
        stopGame();
    }

    if (mood <= 0) {
        alert(`${petName} ist traurig und möchte nicht mehr spielen.`);
        stopGame();
    }
}

function startStatusUpdate() {
    setInterval(() => {
        hunger = Math.min(100, hunger + 5);
        mood = Math.max(0, mood - 5);
        energy = Math.max(0, energy - 3);
        updateStatusBars();
    }, 5000);
}

function stopGame() {
    clearInterval(startStatusUpdate);
}
