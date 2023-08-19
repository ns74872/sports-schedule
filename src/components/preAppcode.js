import React, { useState } from 'react';
import './App.css';

const soccerMatches = [
  { teams: 'Team A vs Team B', location: 'Stadium X', time: '15:00' },
  // Add more soccer matches here
];

const basketballMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

const footballMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

const cricketMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

const badmintonMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

const boxingMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

const chessMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

const hockeyMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

const kabaddiMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];
const squashMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

const vollyballMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

const tennisMatches = [
  { teams: 'Team C vs Team D', location: 'Arena Y', time: '18:30' },
  // Add more basketball matches here
];

function App() {
  const [selectedSport, setSelectedSport] = useState('soccer');

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  const getMatchesBySport = () => {
    if (selectedSport === 'soccer') {
      return soccerMatches;
    } else if (selectedSport === 'basketball') {
      return basketballMatches;
    }
    // Add more sports matches handling here
    return [];
  };

  return (
    <div className="App">
      
      <div className="sidebar">
        <div className={`icon ${selectedSport === 'soccer' ? 'active' : ''}`} onClick={() => handleSportClick('soccer')}>
          Soccer
        </div>
        <div className={`icon ${selectedSport === 'basketball' ? 'active' : ''}`} onClick={() => handleSportClick('basketball')}>
          Basketball
        </div>
        <div className={`icon ${selectedSport === 'football' ? 'active' : ''}`} onClick={() => handleSportClick('football')}>
          Football
        </div>
        <div className={`icon ${selectedSport === 'cricket' ? 'active' : ''}`} onClick={() => handleSportClick('cricket')}>
         cricket <img src="cricket.jpg" alt="" />
        </div>
        <div className={`icon ${selectedSport === 'badminton' ? 'active' : ''}`} onClick={() => handleSportClick('badminton')}>
          Badminton
        </div>
        <div className={`icon ${selectedSport === 'boxing' ? 'active' : ''}`} onClick={() => handleSportClick('boxing')}>
        Boxing
        </div>
        <div className={`icon ${selectedSport === 'chess' ? 'active' : ''}`} onClick={() => handleSportClick('chess')}>
          Chess
        </div>
        <div className={`icon ${selectedSport === 'hockey' ? 'active' : ''}`} onClick={() => handleSportClick('hockey')}>
        Hockey
        </div>
        <div className={`icon ${selectedSport === 'Kabaddi' ? 'active' : ''}`} onClick={() => handleSportClick('kabaddi')}>
        Kabaddi
        </div>
        <div className={`icon ${selectedSport === 'squash' ? 'active' : ''}`} onClick={() => handleSportClick('squash')}>
          Squash
        </div>
        <div className={`icon ${selectedSport === 'tennis' ? 'active' : ''}`} onClick={() => handleSportClick('tennis')}>
          Tennis
        </div>
        {/* Add more sports icons here */}
      </div>

      <div className="main-content">
        <div className="schedule">
          {getMatchesBySport().map((match, index) => (
            <div key={index} className="match">
              <p>{match.teams}</p>
              <p>{match.location}</p>
              <p>{match.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
