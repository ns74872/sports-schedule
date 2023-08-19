import React from 'react';

const Sidebar = ({ sports, onSelectSport }) => {
  return (
    <div className="sidebar">
      {sports.map((sport, index) => (
        <div key={index} className="sport-icon" onClick={() => onSelectSport(sport)}>
          {sport}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;


