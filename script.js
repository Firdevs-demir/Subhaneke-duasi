const phrases = [
  ["سُبْحَانَكَ", "اللّٰهُمَّ", "وَبِحَمْدِكَ", "وَتَبَارَكَ", "اسْمُكَ", "وَتَعَالَى", "جَدُّكَ", "وَلَا", "إِلٰهَ", "غَيْرُكَ"]
];

const phraseContainer = document.getElementById("phraseContainer");
const wordOptions = document.getElementById("wordOptions");
const resultMessage = document.getElementById("resultMessage");
const retryBtn = document.getElementById("retryBtn");
const celebration = document.getElementById("celebration");

const clickSound = document.getElementById("clickSound");
const wrongSound = document.getElementById("wrongSound");
const applauseSound = document.getElementById("applauseSound");

let currentPhrase = [];
let userProgress = 0;

function startGame() {
  currentPhrase = [...phrases[0]];
  userProgress = 0;
  phraseContainer.textContent = "";
  resultMessage.textContent = "";
  retryBtn.style.display = "none";
  celebration.style.display = "none";

  renderOptions();
}

function renderOptions() {
  wordOptions.innerHTML = "";
  const shuffled = [...currentPhrase].sort(() => 0.5 - Math.random());

  shuffled.forEach(word => {
    const btn = document.createElement("button");
    btn.textContent = word;
    btn.onclick = () => checkWord(word);
    wordOptions.appendChild(btn);
  });
}

function checkWord(selectedWord) {
  if (selectedWord === currentPhrase[userProgress]) {
    phraseContainer.textContent += selectedWord + " ";
    userProgress++;
    clickSound.play();

    if (userProgress === currentPhrase.length) {
      resultMessage.textContent = "Tebrikler! Ezberi tamamladınız.";
      applauseSound.play();
      retryBtn.style.display = "inline-block";
      celebration.style.display = "block";
    }
  } else {
    wrongSound.play();
  }
}

startGame();
