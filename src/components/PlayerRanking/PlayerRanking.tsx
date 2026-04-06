import React from 'react'
import List from '../common/List/List';

const PLAYERS = [
  { name: "ALeeeM", score: "99" },
  { name: "IcaruS", score: "99" },
  { name: "TITANSxALeeeM", score: "99" },
  { name: "NEO1", score: "99" },
  { name: "xTITANSxMORx", score: "99" },
  { name: "xOGYx", score: "99" },
  { name: "POYRAZZ", score: "99" },
  { name: "DAYI", score: "99" },
  { name: "BeyazToros", score: "99" },
  { name: "Lux", score: "99" },
];


export const PlayerRanking: React.FC = () => {
    return (
        <div >
          <List data={PLAYERS}  title='Player Ranking'/>   
        </div>
    )
}