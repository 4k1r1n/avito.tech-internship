import { AdvertisementInfo } from '@/types';
import { AdvertisementsModal } from './AdvertisementsModal';
import { FC } from 'react';
import { useUpdateAdvertisementData } from '@/api/useUpdateAdvertisementData';

interface UpdateAdvertisementModal {
  advertisement?: AdvertisementInfo;
}

export const UpdateAdvertisementModal: FC<UpdateAdvertisementModal> = ({
  advertisement,
}) => {
  const { mutate } = useUpdateAdvertisementData();

  return (
    <AdvertisementsModal
      mode='edit'
      advertisement={advertisement}
      onSubmit={mutate}
    />
  );
};
