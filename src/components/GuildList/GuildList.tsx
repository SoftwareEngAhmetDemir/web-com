import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../common/List/List';
import { useTranslation } from 'react-i18next';
import { useRankingStore } from '../../store/rankingStore';

export const GuildList: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    guildsTop10,
    isLoadingGuildsTop10,
    guildsError,
    fetchGuildsTop10,
  } = useRankingStore();

  useEffect(() => {
    fetchGuildsTop10();
  }, [fetchGuildsTop10]);

  const data = guildsTop10.map((g) => ({
    name: g.guildName ?? "—",
    score: String(g.score ?? "—"),
  }));

  return (
    <div>
      <List
        data={data}
        symbole="K"
        title={t('guildList.title')}
        isLoading={isLoadingGuildsTop10}
        error={guildsError}
        onFullList={() => navigate('/ranking/guild')}
      />
    </div>
  );
};
