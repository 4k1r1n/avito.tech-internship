import { Box } from '@mui/material';
import AdvertisementsLimitSelector from '../blocks/AdvertisementsLimitSelector';
import AdvertisementsSearch from '../blocks/AdvertisementsSearch';
import { FC } from 'react';

const AdvertisementsFilterForm: FC = () => {
  return (
    <Box
      sx={{
        margin: '2rem auto 2rem',
        display: 'flex',
      }}
    >
      <AdvertisementsSearch />
      <AdvertisementsLimitSelector />
    </Box>
  );
}

export default AdvertisementsFilterForm
