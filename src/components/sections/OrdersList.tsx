import { FC } from 'react';
import { Typography, Stack, Box, CircularProgress } from '@mui/material';
import { useOrdersStore } from '@/stores/useOrdersStore';
import { useOrdersData } from '@/api/useOrdersData';
import { OrderCard } from '../blocks/OrderCard';

const OrdersList: FC = () => {
  const isSortByTotal = useOrdersStore(({ isSortByTotal }) => isSortByTotal);
  const sortByStatus = useOrdersStore(({ sortByStatus }) => sortByStatus);

  const { data, isSuccess, error, isLoading } = useOrdersData({ isSortByTotal, sortByStatus });

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
        Ошибка: {error.message}
      </Typography>
    );
  }

  return (
    <>
      {isSuccess && data?.length ? (
        <Stack spacing={3}>
          {data.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
            />
          ))}
        </Stack>
      ) : (
        <Typography variant='h4' component='h2' sx={{ textAlign: 'center' }}>
          Заказов не найдено
        </Typography>
      )}
    </>
  );
}

export default OrdersList