import { FC } from 'react';
import Grid from '@mui/material/Grid2';
import { AdvertisementInfo } from '@/types';
import AdvertisementCard from './AdvertisementCard';

interface ListWithAdvertisementsCards {
  advertisements: AdvertisementInfo[];
}

export const ListWithAdvertisementsCards: FC<ListWithAdvertisementsCards> = ({ advertisements }) => {
  return (
    <Grid container spacing={5}>
      {advertisements.map((advertisement) => (
        <AdvertisementCard
          key={advertisement.id}
          advertisement={advertisement}
        />
      ))}
    </Grid>
  );
};