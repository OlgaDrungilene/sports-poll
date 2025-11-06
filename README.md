# Sports Poll App

A simple sports poll app built with **React** and **Vite**. Users can vote on ongoing sports events, see event details, and view the outcome of their votes. Votes persist in **localStorage**, and the app is responsive for different devices.

## Features
- Show random sports events (Football, Tennis, Hockey, etc.)
- Vote for Home, Away, or Draw
- Persist votes in localStorage
- Responsive design for desktop, tablet, and mobile

## Development Tools
- React (with Hooks)
- Vite
- Plain CSS (no frameworks)
- Browser LocalStorage

## How to Run
1. Clone the repository:
   git clone <your-repo-url>
   cd sports-poll
2. Install dependences
   npm install
3. Start the development server:
   npm run dev
4. Open your browser at http://localhost:5173/

## Notes
Events are loaded from public/data/events.json.
Votes are stored by event ID in localStorage and persist across page reloads.
Finished events are displayed for 5 seconds before showing a new random event.
