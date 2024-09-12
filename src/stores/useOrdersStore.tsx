import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface OrdersFilterFormProps {
  isSortByTotal: boolean;
  setIsSortByTotal: (isSortByTotal: boolean) => void;
  sortByStatus: number;
  setSortByStatus: (sortByStatus: number) => void;
};

export const useOrdersStore = create<OrdersFilterFormProps>()(
  devtools(
    persist(
      (set) => ({
        isSortByTotal: false,
        setIsSortByTotal: (isSortByTotal) => set({ isSortByTotal }),
        sortByStatus: -1,
        setSortByStatus: (sortByStatus) => set({ sortByStatus }),
      }),
      { name: 'orders-store' }
    )
  )
);