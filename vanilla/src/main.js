import './style.css';

const body = document.querySelector('body');
const date = document.getElementById('date');
const fullDate = document.getElementById('fullDate');
const time = document.getElementById('time');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const updateClockDisplay = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hour}:${minutes}:${seconds}`;
    date.setAttribute('datetime', formattedDate);
    date.textContent = days[currentDate.getDay()];
    fullDate.setAttribute('datetime', formattedDate);
    fullDate.textContent = currentDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long', 
        year: 'numeric'
    });
    const dayTime = currentDate.getHours();
    if (dayTime <= 7 || dayTime >=18) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
    time.setAttribute('datetime', formattedTime);
    time.textContent = currentDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

updateClockDisplay();
setInterval(updateClockDisplay, 1000);