import React from 'react';
import List from '../common/List/List';
import { useTranslation } from 'react-i18next';

const PLAYERS = [
  { name: "ALeeeM", flag: 'https://capomt2.com/web/assets/images/empire/1.jpg', score: "99" },
  { name: "IcaruS", flag: 'https://capomt2.com/web/assets/images/empire/2.jpg', score: "99" },
  { name: "TITANSxALeeeM", flag: 'https://capomt2.com/web/assets/images/empire/3.jpg', score: "99" },
  { name: "NEO1", flag: 'https://capomt2.com/web/assets/images/empire/1.jpg', score: "99" },
  { name: "xTITANSxMORx", flag: 'https://capomt2.com/web/assets/images/empire/3.jpg', score: "99" },
  { name: "xOGYx", flag: 'https://capomt2.com/web/assets/images/empire/2.jpg', score: "99" },
  { name: "POYRAZZ", flag: 'https://capomt2.com/web/assets/images/empire/3.jpg', score: "99" },
  { name: "DAYI", flag: 'https://capomt2.com/web/assets/images/empire/1.jpg', score: "99" },
  { name: "BeyazToros", flag: 'https://capomt2.com/web/assets/images/empire/2.jpg', score: "99" },
  { name: "Lux", flag: 'https://capomt2.com/web/assets/images/empire/3.jpg', score: "99" },
];

const symbol = 'LV';

export const PlayerRankingList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <List data={PLAYERS} symbole={symbol} title={t('playerList.title')} />
    </div>
  );
};
