import React from 'react';
import List from '../common/List/List';
import { useTranslation } from 'react-i18next';

const GUILDS = [
  { name: "AKASYADURAGI", score: "24" },
  { name: "TR", score: "23" },
  { name: "AMGOTMEME", score: "23" },
  { name: "KVP", score: "23" },
  { name: "RAMPAGE", score: "22" },
  { name: "FBI", score: "22" },
  { name: "GREEDALLSTAR", score: "22" },
  { name: "WOK", score: "22" },
  { name: "FAVELA", score: "21" },
  { name: "SOLDELACRIME", score: "21" }
];

const symbol = 'K';

export const GuildList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <List data={GUILDS} symbole={symbol} title={t('guildList.title')} />
    </div>
  );
};
