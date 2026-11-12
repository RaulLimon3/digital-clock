import "./App.css";

function App() {
  return (
    <>
      <main className="main">
        <div className="date-container">
          <time className="date" id="date">Lunes</time>
          <time className="full-date" id="fullDate">7 de Noviembre de 2026</time>
        </div>
        <div className="time-container">
          <time className="time" id="time">00:00 p.m</time>
        </div>
      </main>
    </>
  );
};

export default App;
