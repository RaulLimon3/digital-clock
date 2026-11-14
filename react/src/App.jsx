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

  const [date, setDate] = useState(
    currentDay.toLocaleDateString("en-US", { weekday: "long" }),
  );
  const [fullDate, setFullDate] = useState(
    currentDay.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  );
  const [time, setTime] = useState(
    currentDay.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  );

  useEffect(() => {
    setInterval(() => {
      const currentDate = new Date();
      setTime(
        currentDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    }, 1000);
  }, [time]);

  return (
    <>
      <main className="main">
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
