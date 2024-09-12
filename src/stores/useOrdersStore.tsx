import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface OrdersFilterFormProps {
  isSortByTotal: boolean;
  setIsSortByTotal: (isSortByTotal: boolean) => void;
  sortByStatus: number;
  setSortByStatus: (sortByStatus: number) => void;
};

export const useOrdersStore = create<OrdersFilterFormProps>()(
  devtools(
    (set) => ({
      isSortByTotal: false,
      setIsSortByTotal: (isSortByTotal) => set({ isSortByTotal }),
      sortByStatus: -1,
      setSortByStatus: (sortByStatus) => set({ sortByStatus }),
    }),
    { name: 'orders-store' }
  )
);