import { useOrdersStore } from '@/stores/useOrdersStore';
import { FormControlLabel, Switch } from '@mui/material';
import { FC } from 'react';

export const OrdersTotalSwitcher: FC = () => {
  const isSortByTotal = useOrdersStore(({ isSortByTotal }) => isSortByTotal);
  const setIsSortByTotal = useOrdersStore(({ setIsSortByTotal }) => setIsSortByTotal);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isSortByTotal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsSortByTotal(e.target.checked)}
        />
      }
      label='По возрастанию суммы'
    />
  );
};