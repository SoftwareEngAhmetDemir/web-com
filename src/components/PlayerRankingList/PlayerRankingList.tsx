import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../common/List/List';
import { useTranslation } from 'react-i18next';
import { useRankingStore } from '../../store/rankingStore';

const EMPIRE_FLAG_URL = (empire: number) =>
  `https://capomt2.com/web/assets/images/empire/${empire}.jpg`;

export const PlayerRankingList: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    charactersTop10,
    isLoadingCharactersTop10,
    charactersError,
    fetchCharactersTop10,
  } = useRankingStore();

  useEffect(() => {
    fetchCharactersTop10();
  }, [fetchCharactersTop10]);

  const data = charactersTop10.map((c) => ({
    name: c.characterName ?? c.name ?? "—",
    score: String(c.level ?? "—"),
    flag: c.empire ? EMPIRE_FLAG_URL(c.empire) : undefined,
  }));

  return (
    <div>
      <List
        data={data}
        symbole="LV"
        title={t('playerList.title')}
        isLoading={isLoadingCharactersTop10}
        error={charactersError}
        onFullList={() => navigate('/ranking/player')}
      />
    </div>
  );
};
