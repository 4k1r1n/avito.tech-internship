import { AdvertisementInfo } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { API_ENDPOINTS } from './apiEndpoints';

interface Options {
  limit: string;
  search?: string;
}

interface fetchOptions extends Options {
  page: number;
}

type ApiResponse = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: AdvertisementInfo[];
}

const fetchAdvertisements = async ({ limit, page, search }: fetchOptions) => {
  const url = new URL(`${import.meta.env.VITE_API_URL}/${API_ENDPOINTS.Advertisements}`);
  const searchParams = url.searchParams;

  searchParams.set('_per_page', limit);
  searchParams.set('_page', `${page}`);
  
  if (search) searchParams.set('name', search);

  return await (await fetch(url)).json();
};

export const useAdvertisementsData = ({ limit, search }: Options) =>
  useInfiniteQuery<ApiResponse, Error, AdvertisementInfo[]>({
    queryKey: ['advertisements', limit, search],

    queryFn: ({ pageParam = 0 }) => 
      fetchAdvertisements({ 
        limit, 
        page: pageParam as number,
        search,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => lastPage.next,

    select: ({ pages }) => pages.map(({ data }) => data).flat(),
  });
