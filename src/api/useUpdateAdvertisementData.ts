import { AdvertisementInfo } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from './apiEndpoints';

const updateAdvertisement = async (advertisement: AdvertisementInfo) => {
  return await fetch(
    `${import.meta.env.VITE_API_URL}/${API_ENDPOINTS.Advertisements}/${advertisement.id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(advertisement),
    }
  );
};

export const useUpdateAdvertisementData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAdvertisement,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['advertisement'],
      });
    },
  });
};
