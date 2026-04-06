import React from 'react'
import List from '../common/List/List';

const GUILDS = [
  { name: "AKASYADURAGI", score: "24K" },
  { name: "TR", score: "23K" },
  { name: "AMGOTMEME", score: "23K" },
  { name: "KVP", score: "23K" },
  { name: "RAMPAGE", score: "22K" },
  { name: "FBI", score: "22K" },
  { name: "GREEDALLSTAR", score: "22K" },
  { name: "WOK", score: "22K" },
  { name: "FAVELA", score: "21K" },
  { name: "SOLDELACRIME", score: "21K" }
];

export const GuildList: React.FC<{}> = () => {
    return (
        <div >
          <List data={GUILDS}  title='Guild Ranking'/>   
        </div>
    )
}