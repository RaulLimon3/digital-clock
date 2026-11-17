import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const hour = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hour}:${minutes}:${seconds}`;
  const date = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const fullDate = currentDate.toLocaleDateString("en-US", {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  const time = currentDate.toLocaleTimeString("en-US", {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const currentHour = currentDate.getHours();
  const dayTime = currentHour <= 7 || currentHour >= 18 ? 'dark' : '';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main className={`main ${dayTime}`}>
        <div className="date-container">
          <time className="date" dateTime={formattedDate}>
            {date}
          </time>
          <time className="full-date" dateTime={formattedDate}>
            {fullDate}
          </time>
        </div>
        <div className="time-container">
          <time className="time" dateTime={formattedTime}>
            {time}
          </time>
        </div>
      </main>
    </>
  );
}

export default App;
