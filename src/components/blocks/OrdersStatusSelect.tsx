import { useOrdersStore } from '@/stores/useOrdersStore';
import { OrderStatus } from '@/types';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

const getStatusKey = (statusValue: number): string => {
  const entry = Object.entries(OrderStatus).find(([, value]) => value === statusValue);
  return entry ? entry[0] : 'Статус';
};

export const OrdersStatusSelect: FC = () => {
  const sortByStatus = useOrdersStore(({ sortByStatus }) => sortByStatus);
  const setSortByStatus = useOrdersStore(({ setSortByStatus }) => setSortByStatus);

  return (
    <Select
      displayEmpty
      value={String(sortByStatus)}
      onChange={(e: SelectChangeEvent) => {
        setSortByStatus(Number(e.target.value));
      }}
      renderValue={(selected) => {
        const selectedValue = Number(selected);
        return selectedValue === -1 ? 'Статус' : getStatusKey(selectedValue);
      }}
    >
      <MenuItem value={-1}>Статус</MenuItem>
      {Object.entries(OrderStatus).map(([key, value]) => (
        <MenuItem key={value} value={value}>{key}</MenuItem>
      ))}
    </Select>
  )
}