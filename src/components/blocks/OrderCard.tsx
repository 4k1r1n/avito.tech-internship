import COLORS from '@/styles/colors';
import { OrderInfo, OrderStatus } from '@/types';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FC, useMemo, useState } from 'react'
import AdvertisementsList from '../sections/AdvertisementsList';

export type OrderCardProps = {
  order: OrderInfo,
};

const getStatusCode = (status: number): string | undefined => {
  return Object.entries(OrderStatus).find(([, value]) => value === status)?.[0]
};

export const OrderCard: FC<OrderCardProps> = ({ order }) => {
  const { items, total, id, createdAt, status, finishedAt } = order;
  const [isShowMore, setIsShowMore] = useState(false);

  const statusCode = useMemo(() => getStatusCode(status), [status]);

  return (
    <Stack>
      <Box
        sx={{
          padding: '1rem',
          backgroundColor: COLORS.white,
          borderBottomLeftRadius: '.5rem',
          borderBottomRightRadius: '.5rem',
        }}
      >
        <Typography variant='h6' component='h2'>Заказ №{id}</Typography>
        <Typography component='p'>Количество: {items.length}</Typography>
        <Typography component='p'>Цена: {total} ₽</Typography>
        <Typography component='p'>Создан: {new Date(createdAt).toLocaleDateString()}</Typography>
        <Typography component='p'>Статус: {statusCode}</Typography>
        <Typography component='p'>{finishedAt ? `Заказ завершен ${new Date(finishedAt).toLocaleDateString()}` : `Заказ не завершен`}</Typography>
        {(!isShowMore && items.length > 0) && (
          <Button variant='outlined' onClick={() => setIsShowMore(true)}>Показать все товары</Button>
        )}
        {isShowMore && (<AdvertisementsList />)}
      </Box>
    </Stack>
  )
}
