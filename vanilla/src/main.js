import './style.css';

const body = document.querySelector('body');
const date = document.getElementById('date');
const fullDate = document.getElementById('fullDate');
const time = document.getElementById('time');

const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const updateClockDisplay = () => {
    const currentDate = new Date();
    date.textContent = days[currentDate.getDay()];
    fullDate.textContent = currentDate.toLocaleDateString('es-MX', {
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
    time.textContent = currentDate.toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

updateClockDisplay();
setInterval(updateClockDisplay, 1000);