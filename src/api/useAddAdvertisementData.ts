import { AdvertisementInfo } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from './apiEndpoints';

const createAdvertisement = async (advertisement: AdvertisementInfo) => {
  await fetch(`${import.meta.env.VITE_API_URL}/${API_ENDPOINTS.Advertisements}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(advertisement),
  });
};

export const useAddAdvertisementData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAdvertisement,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['advertisements'],
      });
    },
  });
};
