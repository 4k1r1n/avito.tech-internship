import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AdvertisementStoreState {
  limit: string;
  setLimit: (limit: string) => void;
  search: string;
  setSearch: (search: string) => void;
};

export const useAdvertisementsStore = create<AdvertisementStoreState>()(
  devtools(
    persist(
      (set) => ({
        limit: '10',
        setLimit: (limit) => set({ limit }),
        search: '',
        setSearch: (search) => set({ search }),
      }),
      { 
        name: 'advertisements-store',
        partialize: (state) => ({ search: state.search })
      }
    )
  )
);
