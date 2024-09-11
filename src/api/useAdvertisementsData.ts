import { AdvertisementInfo } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { API_ENDPOINTS } from './apiEndpoints';

interface Options {
  limit: string;
  search?: string;
}

interface fetchOptions extends Options {
  start: number;
}

const fetchAdvertisements = async ({ limit, start, search }: fetchOptions) => {
  const url = new URL(`${import.meta.env.VITE_API_URL}/${API_ENDPOINTS.Advertisements}`);
  const searchParams = url.searchParams;

  searchParams.set('_limit', limit);
  searchParams.set('_start', `${start}`);
  if (search) searchParams.set('name', search);

  return await (await fetch(url)).json();
};

export const useAdvertisementsData = ({ limit, search }: Options) =>
  useInfiniteQuery<AdvertisementInfo[]>({
    queryKey: ['advertisements', limit, search],

    queryFn: ({ pageParam = 0 }) =>
      fetchAdvertisements({ 
        limit, 
        start: pageParam as number,
        search,
      }),

    initialPageParam: 0,

    getNextPageParam: (lastPage, pages) => {
      const start = pages.flat().length;

      if (lastPage.length) return start;

      return;
    },
  });
