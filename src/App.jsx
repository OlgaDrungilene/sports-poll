import { useEffect, useState } from "react";
import Poll from "./components/Poll.jsx";
import "./styles/App.css";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`./data/events.json?ts=${Date.now()}`)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Failed to load events:", error));
  }, []);
  return (
    <div className="App">
      <h1>Sports Poll</h1>
      {events.length > 0 ? <Poll events={events} /> : <p>Loading events...</p>}
    </div>
  );
}

export default App;
