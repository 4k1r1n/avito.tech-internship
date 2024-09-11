import { CreateAdvertisementModal } from '@/components/blocks/CreateAdvertisementModal';
import AdvertisementsFilterForm from '@/components/sections/AdvertisementsFilterForm';
import AdvertisementsList from '@/components/sections/AdvertisementsList';
import { Typography } from '@mui/material';
import { FC } from 'react';

const Advertisements: FC = () => {
  return (
    <>
      <Typography
        variant='h3'
        component='h1'
        sx={{
          marginBottom: '2rem'
        }}
      >
        Объявления
      </Typography>
      <CreateAdvertisementModal />
      <AdvertisementsFilterForm />
      <AdvertisementsList />
    </>
  )
}

export default Advertisements