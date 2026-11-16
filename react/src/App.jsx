import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const currentDay = new Date();
  const day = String(currentDay.getDate()).padStart(2, "0");
  const month = String(currentDay.getMonth() + 1).padStart(2, "0");
  const year = currentDay.getFullYear();
  const hour = String(currentDay.getHours()).padStart(2, "0");
  const minutes = String(currentDay.getMinutes()).padStart(2, "0");
  const seconds = String(currentDay.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hour}:${minutes}:${seconds}`;

  const [clockData, setClockData] = useState({
    date: currentDay.toLocaleDateString("en-US", { weekday: "long" }),
    fullDate: currentDay.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    time: currentDay.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    formattedDate: formattedDate,
    formattedTime: formattedTime,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      const hour = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');
      setClockData({
        date: currentDate.toLocaleDateString("en-US", { weekday: "long" }),
        fullDate: currentDate.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        time: currentDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        formattedDate: `${year}-${month}-${day}`,
        formattedTime: `${hour}:${minutes}:${seconds}`
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main className="main">
        <div className="date-container">
          <time className="date" dateTime={clockData.formattedDate}>
            {clockData.date}
          </time>
          <time className="full-date" dateTime={clockData.formattedDate}>
            {clockData.fullDate}
          </time>
        </div>
        <div className="time-container">
          <time className="time" dateTime={clockData.formattedTime}>
            {clockData.time}
          </time>
        </div>
      </main>
    </>
  );
}

export default App;
