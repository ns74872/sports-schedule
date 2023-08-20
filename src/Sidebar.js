import React, { useState } from 'react';
// import './Sidebar.css'; // Import your custom CSS file for styling
import './Sidebar.css'

const Sidebar = () => {
  const sportsData = {
    Game:
    {
      name:[
        {
          name:'football',
          img:"https://img.freepik.com/premium-vector/soccer-football-icon-isolated-white-background-vector-illustration_345220-18.jpg?w=2000",
          bgimg:"https://media.istockphoto.com/id/1202466316/photo/football-player-in-the-stadium.webp?b=1&s=170667a&w=0&k=20&c=-pab8g-QFU80OmkzElVVAusCBeEcKVEUi2C1twCbao8="
        },
       
        {
          name:'basketball',
          img:"https://cdn-icons-png.flaticon.com/512/889/889455.png",
          bgimg:"https://media.istockphoto.com/id/1056734144/photo/basketball-player-scoring-slam-dunk.jpg?s=612x612&w=0&k=20&c=nZH7h8Aev5X3dP14GeklpCnegilwVSxdnu8yNhsndsQ="
        },
        {
          name:'cricket',
          img:"https://media.istockphoto.com/id/1294093168/vector/cricket-bat-ball-stump-bails-icon.jpg?s=612x612&w=0&k=20&c=docMt6N3b0KVd8s2E2UGhXJ9U_rXK1yCojbReac9bcw=",
          bgimg:"https://media.istockphoto.com/id/180868820/photo/cricket-batsman-about-to-strike-ball.jpg?s=612x612&w=0&k=20&c=xRiAIk3RA6cmm1FtI2S-YK8Pei9qSkqxhX-JUbTI2Cs="
        },
        {
          name:'tennis',
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrnIHw7okSWxzsQFpeMvUK5Ka80GnyNgbZToy63Y&s",
          bgimg:"https://media.istockphoto.com/id/666919168/photo/male-sportsman-in-action.jpg?s=612x612&w=0&k=20&c=M8FwL_ijvGM8jZEb8MP57Wr0Wu2k5KRkxIzpITWihOk="
        },
        {
          name:'hockey',
          img:"https://static.thenounproject.com/png/514185-200.png",
          bgimg:"https://media.istockphoto.com/id/503545170/photo/field-hockey-player-in-mid-action-during-hockey-game.jpg?s=612x612&w=0&k=20&c=VBP3gAoRvv5nA4B5l5cJH_r9lXBG7h4nnZF9r_Z7hfk="
        },
        {
          name:'badminton',
          img:"https://cdn-icons-png.flaticon.com/512/447/447840.png",
          bgimg:"https://media.istockphoto.com/id/466766434/vector/polygonal-professional-badminton-player.jpg?s=612x612&w=0&k=20&c=0k_PdhAnOePMkj-yQkv4kTldvN4o3xtGJhJZkA7LlQQ="
        },
        {
          name:'chess',
          img:"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/chess_piece_king.png",
          bgimg:"https://media.istockphoto.com/id/1370874998/photo/chess-pieces-checkmate-gold-king-winner-surrounded-with-silver-chess-pieces-on-chess-board.jpg?s=612x612&w=0&k=20&c=L7dkuFw6qyjylwqMjkEGjJf1S2d7BBjcLp0Iks9yOjw="
        },
        {
          name:'boxing',
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0SkHGlgigRqI9XlZCB4vQFMgku5XJxb20nG6sz8&s",
          bgimg:"https://media.istockphoto.com/id/813192598/photo/two-professional-boxer-boxing-on-black-smoky-background.jpg?s=612x612&w=0&k=20&c=yfXtbvbIzGLSY1yGfgt9uWjYXODMO-0rGUhG_uTk3A8="
        },
        {
          name:'khokho',
          img:"https://cdn.iconscout.com/icon/premium/png-512-thumb/kho-kho-4294551-3562133.png?f=avif&w=256",
          bgimg:"https://www.ultimatekhokho.com/static-assets/waf-images/99/3f/a3/16-9/hWhEmShFGE.PNG?v=2.1&w=500"
        },
        {
          name:'squash',
          img:"https://w7.pngwing.com/pngs/137/30/png-transparent-hotel-icon-squash-computer-icons-squash-s-angle-text-hand.png",
          bgimg:"https://media.istockphoto.com/id/1031705704/photo/two-male-squash-players-during-a-game.jpg?s=612x612&w=0&k=20&c=TnIytEubh8iC8lg0OObwNHTSbiMzjytRGOnhDT6o_0U="
        },
        {
          name:'tableTennis',
          img:"https://cdn-icons-png.flaticon.com/512/72/72980.png",
          bgimg:"https://media.istockphoto.com/id/486973336/photo/young-sports-man-tennis-player-playing-on-black-background-with.jpg?s=612x612&w=0&k=20&c=deqxBw9p78ZlfGs4SFa7-bqoW5QatM8nUk0Jq2Cl9ro="
        },
        {
          name:'volleyball',
          img:"https://static.vecteezy.com/system/resources/previews/008/957/267/non_2x/volleyball-icon-clipart-in-flat-animated-illustration-on-white-background-vector.jpg",
          bgimg:"https://media.istockphoto.com/id/1369998216/photo/volleyball-player-players-in-action.jpg?s=612x612&w=0&k=20&c=I0Fl0zgAFRIOq-kobRrkmdb7SmIOSA2SidCiSzoiUAc="
        },

       
      ],
      games:{
        football: {
          matches:[
            { teamA: "Team A", teamB: "Team B", location: "Stadium A", time: "12:00 PM" },
            { teamA: "Team C", teamB: "Team D", location: "Stadium C", time: "1:00 PM", },
            { teamA: "Team C", teamB: "Team D", location: "Stadium C", time: "2:00 PM", },
            { teamA: "Team C", teamB: "Team D", location: "Stadium C", time: "2:00 PM", },
            { teamA: "Team C", teamB: "Team D", location: "Stadium C", time: "2:00 PM", },
            
          ],

          // Add more matches for football
        },
        basketball: {
          matches:[
  
            { teamA: "Team X", teamB: "Team Y", location: "Arena B", time: "3:30 PM" },
            { teamA: "Team X", teamB: "Team Y", location: "Arena B", time: "3:30 PM" },
            { teamA: "Team X", teamB: "Team Y", location: "Arena B", time: "3:30 PM" },
            { teamA: "Team X", teamB: "Team Y", location: "Arena B", time: "3:30 PM" },

          ],
         
          // Add more matches for basketball
        },
        cricket: {
          matches:[
  
            { teamA: "Team A1", teamB: "Team A2", location: "Gymkhana Grounds", time: "3:00 PM" },
            { teamA: "Team A1", teamB: "Team A2", location: "Gymkhana Grounds", time: "3:00 PM" },
            { teamA: "Team A1", teamB: "Team A2", location: "Gymkhana Grounds", time: "3:00 PM" },
            { teamA: "Team A1", teamB: "Team A2", location: "Gymkhana Grounds", time: "3:00 PM" },
          ],
         
          // Add more matches for tennis
        },
        tennis: {
          matches:[
  
            { teamA: "Player 1", teamB: "Player 2", location: "Court C", time: "2:15 PM" },
            { teamA: "Player 1", teamB: "Player 2", location: "Court C", time: "2:15 PM" },
            { teamA: "Player 1", teamB: "Player 2", location: "Court C", time: "2:15 PM" },
            { teamA: "Player 1", teamB: "Player 2", location: "Court C", time: "2:15 PM" },

          ],
         
          // Add more matches for tennis
        },
        hockey: {
          matches:[
  
            { teamA: "Team H1", teamB: "Team H2", location: "ADV Grounds", time: "6:00 PM" },
            { teamA: "Team H1", teamB: "Team H2", location: "ADV Grounds", time: "6:00 PM" },
            { teamA: "Team H1", teamB: "Team H2", location: "ADV Grounds", time: "6:00 PM" },
            { teamA: "Team H1", teamB: "Team H2", location: "ADV Grounds", time: "6:00 PM" },

          ],
         
          // Add more matches for tennis
        },
        badminton: {
          matches:[
  
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
          ],

          // Add more matches for tennis
        },
        chess: {
          matches:[
            { teamA: "Team A", teamB: "Team B", location: "Stadium A", time: "12:00 PM" },
            { teamA: "Team C", teamB: "Team D", location: "Stadium C", time: "1:00 PM", },
            { teamA: "Team C", teamB: "Team D", location: "Stadium C", time: "2:00 PM", },
            { teamA: "Team C", teamB: "Team D", location: "Stadium C", time: "2:00 PM", },
            { teamA: "Team C", teamB: "Team D", location: "Stadium C", time: "2:00 PM", },
            
          ],
          // Add more matches for football
        },
        boxing: {
          matches:[
  
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },

          ],

          // Add more matches for tennis
        },
        
        khokho: {
          matches:[
  
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },

          ],

          // Add more matches for tennis
        },
        squash: {
          matches:[
  
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },

          ],

          // Add more matches for tennis
        },
        tableTennis: {
          matches:[
  
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },

          ],

          // Add more matches for tennis
        },
       volleyball: {
          matches:[
  
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },
            { teamA: "Player B1", teamB: "Player B2", location: "Court C", time: "5:30 PM" },

          ],

          // Add more matches for tennis
        },
  
        }
    }
  }
    

  const [selectedSport, setSelectedSport] = useState('football'); // Default to football

  const handleSportClick = (sportName) => {
    setSelectedSport(sportName);
  };

  const selectedSportDetails = sportsData.Game.games[selectedSport].matches;

  return (
    <div className="container">
      <div className="sidebar">
        {sportsData.Game.name.map((sport) => (
          <div
            key={sport.name}
            className={`sport-item ${selectedSport === sport.name ? 'selected' : ''}`}
            onClick={() => handleSportClick(sport.name)}
          >
            <div className="sport-image">
              <img src={sport.img} alt={sport.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="rightbar">
        
        <div className='imgContainer' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           
          
          <img className='imgContainer' src={sportsData.Game.name.find((sport) => sport.name === selectedSport)?.bgimg} alt={selectedSport} />
    
        </div>
        <div className="sport-matches">
          <h2>{selectedSport} upcomming matches</h2>
          
          <ul>
            {selectedSportDetails.map((match, index) => (
              <li key={index} className="match-item">
                {match.teamA} V/S {match.teamB} @ {match.location},  {match.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Sidebar;
