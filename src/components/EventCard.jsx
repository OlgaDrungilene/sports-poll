import "../styles/EventCard.css";

function EventCard({ event }) {
  // Funktion som returnerar emoji beroende på sport
  const getSportIcon = (sport) => {
    switch (sport.toLowerCase()) {
      case "football":
        return "⚽";
      case "basketball":
        return "🏀";
      case "tennis":
        return "🎾";
      case "hockey":
        return "🏒";
      case "baseball":
        return "⚾";
      default:
        return "🏆";
    }
  };

  // Funktion för att snyggt formatera status
  const formatStatus = (state) => {
    return state
      ? state
          .replace(/_/g, " ")
          .toLowerCase()
          .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
      : "Unknown";
  };

  return (
    <div className="event-card">
      <div className="event-header">
        <span className="event-sport">
          {getSportIcon(event.sport)} {event.sport}
        </span>
        <span className="event-group">{event.group}</span>
      </div>

      <h3 className="event-name">
        {event.homeName} <span className="vs">vs</span> {event.awayName}
      </h3>

      <p className="event-status">
        <strong>Status:</strong> {formatStatus(event.state)}
      </p>
    </div>
  );
}

export default EventCard;
