const calculationTab = document.querySelector('.date-calc-btn');
const timerTab = document.querySelector('.timer-btn');
const timerForm = document.querySelector('.timer-form');
export const dateForm = document.querySelector('.date-calc-form');

calculationTab.addEventListener('click', () => {
    timerForm.style.display = 'none';
    dateForm.style.display = 'flex';
    
});
timerTab.addEventListener('click', () => {
    timerForm.style.display = 'block';
    dateForm.style.display = 'none';
    
});