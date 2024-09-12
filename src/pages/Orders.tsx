import { OrdersFilterForm } from '@/components/sections/OrdersFilterForm';
import OrdersList from '@/components/sections/OrdersList';
import { Typography } from '@mui/material';
import { FC } from 'react';

const Orders: FC = () => {
  return (
    <>
      <Typography
        variant='h3'
        component='h1'
        sx={{
          marginBottom: '2rem'
        }}
      >
        Заказы
      </Typography>
      <OrdersFilterForm />
      <OrdersList />
    </>
  )
}

export default Orders