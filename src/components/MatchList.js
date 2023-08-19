import React from 'react';

const MatchList = ({ matches }) => {
  return (
    <div className="match-list">
      {matches.map(match => (
        <div key={match.id} className="match">
          <div className="team-names">{match.team1} vs {match.team2}</div>
          <div className="match-info">{match.location} - {match.time}</div>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
