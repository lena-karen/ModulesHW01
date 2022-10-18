import { calcDates, renderCalcDates } from "./calcdate.js";
import {formatError} from "./utils.js";
import { dateForm } from "./changetab.js";
import  {Howl, Howler} from "./howler.js";


const resultEl = document.querySelector('.date-calc-res');
const [startBtn, stopBtn] = document.querySelectorAll('.timer-form button');
const timerInput = document.querySelector('.time');

dateForm.addEventListener('submit', (event) => {
    resultEl.innerText = '';
    event.preventDefault();

    let {firstDate, secondDate} = event.target.elements;

    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if ( firstDate && secondDate) {
        const res = calcDates(firstDate, secondDate);
        resultEl.innerHTML = renderCalcDates(res);
    } else {
        resultEl.innerHTML = formatError('Enter both dates');
    }
});


let isStoped = true;
let startTime;

window.setInterval(() => {
    if (!isStoped) {
        startTime--;
        timerInput.value = startTime;
    } 
    if (startTime == 0) {
        const s = new Howl({
            src: ['sound.mp3', 'sound.ogg']
          });
          s.play()
        isStoped = true;
    }
}, 1000);

const startTimer = () => {
    startTime = timerInput.value;
    if (startTime != 0) {
        isStoped = false;
    }
};

const stopTimer = () => {
    isStoped = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);


