import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './apiEndpoints';

const fetchAdvertisementById = async (id: number) => {
  return await (
    await fetch(`${import.meta.env.VITE_API_URL}/${API_ENDPOINTS.Advertisements}/${id}`)
  ).json();
};

export const useAdvertisementData = (id: number) =>
  useQuery({
    queryKey: ['advertisement', id],
    queryFn: () => fetchAdvertisementById(id),
  });
