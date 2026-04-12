import { create } from "zustand";
import {
  rankingsApi,
  type CharacterRankingItem,
  type GuildRankingItem,
} from "../services/api";

/** Normalize any API response shape into a plain array. */
function toArray<T>(raw: unknown): T[] {
  if (Array.isArray(raw)) return raw as T[];
  if (raw && typeof raw === "object") {
    // Try common wrapper keys: data, items, result, results, list
    for (const key of ["data", "items", "result", "results", "list"]) {
      const val = (raw as Record<string, unknown>)[key];
      if (Array.isArray(val)) return val as T[];
    }
  }
  return [];
}

interface RankingState {
  // Characters
  charactersTop10: CharacterRankingItem[];
  characters: CharacterRankingItem[];
  isLoadingCharactersTop10: boolean;
  isLoadingCharacters: boolean;
  charactersTop10Error: string | null;
  charactersError: string | null;

  // Guilds
  guildsTop10: GuildRankingItem[];
  guilds: GuildRankingItem[];
  isLoadingGuildsTop10: boolean;
  isLoadingGuilds: boolean;
  guildsError: string | null;

  // Actions
  fetchCharactersTop10: () => Promise<void>;
  fetchCharacters: () => Promise<void>;
  fetchGuildsTop10: () => Promise<void>;
  fetchGuilds: () => Promise<void>;
}

export const useRankingStore = create<RankingState>((set) => ({
  // Characters
  charactersTop10: [],
  characters: [],
  isLoadingCharactersTop10: false,
  isLoadingCharacters: false,
  charactersTop10Error: null,
  charactersError: null,

  // Guilds
  guildsTop10: [],
  guilds: [],
  isLoadingGuildsTop10: false,
  isLoadingGuilds: false,
  guildsError: null,

  fetchCharactersTop10: async () => {
    const { isLoadingCharactersTop10 } = useRankingStore.getState();
    if (isLoadingCharactersTop10) return;
    set({ isLoadingCharactersTop10: true, charactersTop10Error: null });
    try {
      const data = await rankingsApi.getCharactersTop10();
      set({ charactersTop10: toArray<CharacterRankingItem>(data), isLoadingCharactersTop10: false });
    } catch (err) {
      set({
        isLoadingCharactersTop10: false,
        charactersTop10Error:
          err instanceof Error ? err.message : "Failed to load character rankings",
      });
    }
  },

  fetchCharacters: async () => {
    const { isLoadingCharacters } = useRankingStore.getState();
    if (isLoadingCharacters) return;
    set({ isLoadingCharacters: true, charactersError: null });
    try {
      const data = await rankingsApi.getCharacters();
      set({ characters: toArray<CharacterRankingItem>(data), isLoadingCharacters: false });
    } catch (err) {
      set({
        isLoadingCharacters: false,
        charactersError:
          err instanceof Error ? err.message : "Failed to load character rankings",
      });
    }
  },

  fetchGuildsTop10: async () => {
    const { isLoadingGuildsTop10 } = useRankingStore.getState();
    if (isLoadingGuildsTop10) return;
    set({ isLoadingGuildsTop10: true, guildsError: null });
    try {
      const data = await rankingsApi.getGuildsTop10();
      set({ guildsTop10: toArray<GuildRankingItem>(data), isLoadingGuildsTop10: false });
    } catch (err) {
      set({
        isLoadingGuildsTop10: false,
        guildsError:
          err instanceof Error ? err.message : "Failed to load guild rankings",
      });
    }
  },

  fetchGuilds: async () => {
    const { isLoadingGuilds } = useRankingStore.getState();
    if (isLoadingGuilds) return;
    set({ isLoadingGuilds: true, guildsError: null });
    try {
      const data = await rankingsApi.getGuilds();
      set({ guilds: toArray<GuildRankingItem>(data), isLoadingGuilds: false });
    } catch (err) {
      set({
        isLoadingGuilds: false,
        guildsError:
          err instanceof Error ? err.message : "Failed to load guild rankings",
      });
    }
  },
}));
