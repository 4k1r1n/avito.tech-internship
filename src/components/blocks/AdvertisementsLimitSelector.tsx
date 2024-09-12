import { useAdvertisementsStore } from '@/stores/useAdvertisementsStore';
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';

const AdvertisementsLimitSelector: FC = () => {
  const limit = useAdvertisementsStore(({ limit }) => limit);
  const setLimit = useAdvertisementsStore(({ setLimit }) => setLimit);

  return (
    <FormControl>
      <Select
        displayEmpty
        value={limit}
        onChange={(e: SelectChangeEvent) => setLimit(e.target.value)}
      >
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
      <FormHelperText>Количество объявлений</FormHelperText>
    </FormControl>
  );
}

export default AdvertisementsLimitSelector