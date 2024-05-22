function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const randomNumberDiv = document.getElementById('random-number');

randomNumberDiv.textContent = generateRandomNumber();
