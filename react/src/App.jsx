import "./App.css";

function App() {
  const currentDay = new Date();
  return (
    <>
      <main className="main">
        <div className="date-container">
          <time className="date">
            {currentDay.toLocaleDateString('en-US', {
              weekday: "long",
            })}
          </time>
          <time className="full-date">
            {currentDay.toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>
        </div>
        <div className="time-container">
          <time className="time">
            {currentDay.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </time>
        </div>
      </main>
    </>
  );
}

export default App;
