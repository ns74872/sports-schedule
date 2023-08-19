import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MatchDisplay from './MatchDisplay';
import { sportsData } from './Data';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const sports = Object.keys(sportsData);
  const [selectedSport, setSelectedSport] = useState(sports[0]);

  const onSelectSport = (sport) => {
    setSelectedSport(sport);                
  };

  return (
    <div className="app">
      <Sidebar sports={sports} onSelectSport={onSelectSport} />
      <MatchDisplay selectedSport={selectedSport} matches={sportsData[selectedSport]} />
    </div>
  );
};

export default App;


