import { Box, FormGroup } from '@mui/material';
import { FC } from 'react';
import { OrdersStatusSelect } from '../blocks/OrdersStatusSelect';
import { OrdersTotalSwitcher } from '../blocks/OrdersTotalSwitcher';

export const OrdersFilterForm: FC = () => {
  return (
    <Box
      sx={{
        margin: '2rem auto',
        display: 'flex',
        justifyContent: 'end',
        gap: '2rem',
      }}
    >
      <FormGroup>
        <OrdersStatusSelect />
        <OrdersTotalSwitcher />
      </FormGroup>
    </Box>
  );
};