import './style.css';

const body = document.querySelector('body');
const date = document.getElementById('date');
const fullDate = document.getElementById('fullDate');
const time = document.getElementById('time');

const currentDate = new Date();

const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
date.textContent = days[currentDate.getDay()];

fullDate.textContent = currentDate.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

const updateClock = () => {
    const currentTime = new Date();
    const dayTime = currentTime.getHours();
    if (dayTime <= 7 || dayTime >=18) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
    time.textContent = currentTime.toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

updateClock();
setInterval(updateClock, 1000);