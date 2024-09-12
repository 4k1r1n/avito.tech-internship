import { Box, CircularProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AdvertisementCard from '../blocks/AdvertisementCard';
import { useAdvertisementsData } from '@/api/useAdvertisementsData';
import { useAdvertisementsStore } from '@/stores/useAdvertisementsStore';
import { AdvertisementInfo } from '@/types';
import PaginationTrigger from '../ui/PaginationTrigger';
import { FC } from 'react';

const AdvertisementsList: FC = () => {
  const limit = useAdvertisementsStore(({ limit }) => limit);
  const search = useAdvertisementsStore(({ search }) => search);

  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    error,
    hasNextPage,
    fetchNextPage,
  } = useAdvertisementsData({ limit, search });


  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant='h4' component='h2' sx={{ textAlign: 'center' }}>
        Error: {error.message}
      </Typography>
    );
  }

  return (
    <>
      {isSuccess && data?.length ? (
        <>
          <Grid container spacing={5}>
            {data.map((advertisement: AdvertisementInfo) => (
              <AdvertisementCard
                key={advertisement.id}
                advertisement={advertisement}
              />
            ))}
          </Grid>

          <PaginationTrigger
            isLoading={isFetching}
            canLoad={hasNextPage}
            onChange={fetchNextPage}
          />
        </>
      ) : (
        <Typography variant='h4' component='h2' sx={{ textAlign: 'center' }}>
          Объявлений не найдено
        </Typography>
      )}
    </>
  );
}

export default AdvertisementsList
