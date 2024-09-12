import { useAddAdvertisementData } from '@/api/useAddAdvertisementData';
import { AdvertisementsModal } from './AdvertisementsModal';
import { FC } from 'react';

export const CreateAdvertisementModal: FC = () => {
  const { mutate } = useAddAdvertisementData();

  return <AdvertisementsModal mode='create' onSubmit={mutate} />;
}