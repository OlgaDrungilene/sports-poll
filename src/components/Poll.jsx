import { useState, useEffect, useCallback } from "react";
import EventCard from "./EventCard.jsx";
import "../styles/Poll.css";

function Poll({ events }) {
  const [currentEvent, setCurrentEvent] = useState(null);
  const [vote, setVote] = useState(null);

  //slumpmässigt väljer ett event
  const getRandomEvent = useCallback(() => {
    if (!events || events.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
  }, [events]);

  // initialt event
  useEffect(() => {
    if (events.length > 0) {
      setCurrentEvent(getRandomEvent());
    }
  }, [events, getRandomEvent]);

  // Om eventet är "FINISHED" → hoppa till ett nytt direkt
  useEffect(() => {
    if (currentEvent && currentEvent.state === "FINISHED") {
      const timer = setTimeout(() => {
        const nextEvent = getRandomEvent();
        setCurrentEvent(nextEvent);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentEvent, getRandomEvent]);
  // Hantera röstning
  const handleVote = (choice) => {
    if (!currentEvent) return; // <--- stoppa om null

    let voteText = "";
    if (choice === "home") {
      voteText = currentEvent.homeName;
    } else if (choice === "away") {
      voteText = currentEvent.awayName;
    } else {
      voteText = "Draw";
    }
    setVote(voteText);
    localStorage.setItem(`vote-${currentEvent.id}`, voteText);

    setTimeout(() => {
      setVote(null); //rensa bara för nästa event
      const nextEvent = getRandomEvent();
      setCurrentEvent(nextEvent);
    }, 2000);
  };

  if (!currentEvent) return <div>Loading...</div>;
  const isFinished = currentEvent.state === "FINISHED";
  return (
    <div className="poll-container">
      <EventCard event={currentEvent} />

      {isFinished ? (
        <p className="poll-finished">
          ⚠️ This event has finished. You can’t vote.
        </p>
      ) : (
        <div className="poll-options">
          <button
            className="poll-button home"
            onClick={() => handleVote("home")}
          >
            Home wins: {currentEvent.homeName}
          </button>
          <button className="poll-button" onClick={() => handleVote("draw")}>
            Draw
          </button>
          <button
            className="poll-button away"
            onClick={() => handleVote("away")}
          >
            Away wins: {currentEvent.awayName}
          </button>
        </div>
      )}
      {vote && !isFinished && (
        <p className="poll-voted">
          You voted for: <strong>{vote}</strong>
        </p>
      )}
    </div>
  );
}

export default Poll;
