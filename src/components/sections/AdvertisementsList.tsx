import { Box, CircularProgress, Typography } from '@mui/material';
import { useAdvertisementsData } from '@/api/useAdvertisementsData';
import { useAdvertisementsStore } from '@/stores/useAdvertisementsStore';
import PaginationTrigger from '../ui/PaginationTrigger';
import { FC } from 'react';
import { ListWithAdvertisementsCards } from '../blocks/ListWithAdvertisementsCards';

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
          <ListWithAdvertisementsCards advertisements={data} />
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
