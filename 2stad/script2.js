// อ้างอิง Element
const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");
const startButton = document.getElementById("start-button");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const nextButton = document.getElementById("next-button");

// ดาต้าเกี่ยวกับเกมในแต่ละหน้า
const pages = [
    {
        title: "Your Journey Begins!",
        description: "You are standing at the entrance of a dark forest. What will you do?",
    },
    {
        title: "Inside the Forest",
        description: "You encounter a fork in the path. Do you go left or right?",
    },
    {
        title: "A Mysterious Cave",
        description: "You see a cave in front of you. Do you want to enter?",
    },
    {
        title: "Victory!",
        description: "Congratulations! You discovered the hidden treasure.",
    },
];

let currentPage = 0;

// ฟังก์ชันเริ่มเกม
function startGame() {
    startScreen.style.display = "none";
    gameContainer.style.display = "block";
}

// ฟังก์ชันเปลี่ยนหน้า
function goToNextPage() {
    currentPage++;
    if (currentPage < pages.length) {
        titleElement.textContent = pages[currentPage].title;
        descriptionElement.textContent = pages[currentPage].description;
    } else {
        titleElement.textContent = "Game Over";
        descriptionElement.textContent = "Thank you for playing!";
        nextButton.style.display = "none";
    }
}

// เพิ่ม Event Listener ให้ปุ่ม
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", goToNextPage);

