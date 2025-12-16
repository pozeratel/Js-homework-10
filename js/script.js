const beginBtn = document.getElementById("start-count");
let num = 0;
const countingToFive = function () {
    num = 0;
    const interval = setInterval(() => {

        num += 1;

        alert(`${num}`);

        if (num === 5) {
            clearInterval(interval);
        }
    }, 1000);
}

beginBtn.addEventListener("click", countingToFive)


// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

const element1 = document.querySelector(".el1");
const element2 = document.querySelector(".el2");
const element3 = document.querySelector(".el3");


const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

const color = `rgb(${red}, ${green}, ${blue})`;

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;

const animate = setInterval(() => {
    pos1 += 2;
    pos2 += 3;
    pos3 += 1;

    element1.style.left = pos1 + "px";
    element2.style.left = pos2 + "px";
    element3.style.left = pos3 + "px";

    element1.style.backgroundColor = color;
    element2.style.backgroundColor = color;
    element3.style.backgroundColor = color;

    if (pos1 > 200 && pos2 > 200 && pos3 > 200) {
        clearInterval(animate);
    }
}, 30);

// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.


let timeLeft = 10;
let score = 0;
let clicks = 0;
let gameActive = false;

const button = document.getElementById("gameButton");
const timeSpan = document.getElementById("time");
const scoreSpan = document.getElementById("score");
const clicksSpan = document.getElementById("clicks");
const startBtn = document.getElementById("startGame");

button.addEventListener("click", () => {
    if (!gameActive) return;

    score++;
    clicks++;

    scoreSpan.textContent = score;
    clicksSpan.textContent = clicks;
});

startBtn.addEventListener("click", () => {
    gameActive = true;

    timeLeft = 10;
    score = 0;
    clicks = 0;

    timeSpan.textContent = timeLeft;
    scoreSpan.textContent = score;
    clicksSpan.textContent = clicks;

    button.disabled = false;
    button.textContent = "КЛІК!";

    const timer = setInterval(() => {
        timeLeft--;
        timeSpan.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameActive = false;

            button.disabled = true;
            button.textContent = "Гра завершена";

            alert(`Гра закінчена!
Очки: ${score}
Кліки: ${clicks}`);
        }
    }, 1000);
});

// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

const userTimer = document.getElementById("userTime");
const timerBtn = document.getElementById("startCount");
const countDown = document.getElementById("countdown");


timerBtn.addEventListener("click", () => {
    let timerValue = Number(userTimer.value)    
    const intervalId = setInterval(() => {

        timerValue -= 1;
        countDown.textContent = `${timerValue}`

        if (timerValue <= 0) {
            alert("Ваш час вийшов!!");
             countDown.textContent = "00"
            clearInterval(intervalId);
            return
        }
    }, 1000)
})


