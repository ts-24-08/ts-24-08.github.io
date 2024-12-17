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
// Action-Buttons
const feedButton = document.getElementById("feed-button");
const playButton = document.getElementById("play-button");
const sleepButton = document.getElementById("sleep-button");
const exitButton = document.getElementById("exit-button");

let petName = "";
let petAvatar = "";

let hunger = 50;
let energy = 20;
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
    
    if (energy <= 0) {
        alert(`${petName} ist vor Müdigkeit gestorben.`);
        stopGame();
    }
}

function startStatusUpdate() {
    setInterval(() => {
        hunger = Math.min(100, hunger + 5);
        mood = Math.max(0, mood - 5);
        energy = Math.max(0, energy - 3);
        updateStatusBars();
    }, 500);
}

playButton.addEventListener('click', (event) => {
    console.log('playbutton.clicked', event);
    mood = mood + 5;
    energy = energy -1;
    hunger = hunger +3;
})

feedButton.addEventListener('click', (event) => {
    console.log('feedbutton.clicked', event);
    mood = mood + 5;
    energy = energy +5;
    hunger = hunger -10;
})

sleepButton.addEventListener('click', (event) => {
    console.log('sleepbutton.clicked', event);
    mood = mood + 5;
    energy = energy +5;
    hunger = hunger +1;
})

exitButton.addEventListener('click', () => {
    window.location.href = "https://www.google.de";
} )

function stopGame() {
    clearInterval(startStatusUpdate);
}
