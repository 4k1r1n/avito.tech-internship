import { OrderInfo } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './apiEndpoints';

type Options = {
  isSortByTotal: boolean;
  sortByStatus: number;
};

const fetchOrders = async ({ isSortByTotal, sortByStatus }: Options) => {
  const url = new URL(`${import.meta.env.VITE_API_URL}/${API_ENDPOINTS.Orders}`);
  const searchParams = url.searchParams;
  const sortParams = [];

  if (isSortByTotal) {
    sortParams.push('total');
  }

  if (sortByStatus !== -1) {
    sortParams.push('status');
    searchParams.append('status', `${sortByStatus}`);
  }

  const stringSortParams = sortParams.join(',');

  if (stringSortParams) {
    searchParams.append('_sort', stringSortParams);
  }

  return await (await fetch(url)).json();
};

export const useOrdersData = ({ isSortByTotal, sortByStatus }: Options) =>
  useQuery<OrderInfo[]>({
    queryKey: ['orders', isSortByTotal, sortByStatus],
    queryFn: () =>
      fetchOrders({
        isSortByTotal,
        sortByStatus,
      }),
  });