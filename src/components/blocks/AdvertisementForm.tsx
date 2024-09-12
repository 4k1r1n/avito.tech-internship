import { AdvertisementInfo } from '@/types';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  InputAdornment,
  Button,
} from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

interface AdvertisementFormProps {
  advertisement?: AdvertisementInfo;
  mode: 'create' | 'edit';
  onSubmit: (data: AdvertisementInfo) => void;
}

export const AdvertisementForm: FC<AdvertisementFormProps> = ({
  advertisement,
  onSubmit,
  mode,
}) => {
  const [formData, setFormData] = useState<AdvertisementInfo>(
    advertisement || {
      id: String(Date.now()),
      name: '',
      description: '',
      price: 0,
      createdAt: new Date().toISOString(),
      views: 0,
      likes: 0,
      imageUrl: '',
    }
  );

  useEffect(() => {
    if (advertisement) {
      setFormData(advertisement);
    }
  }, [advertisement]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Stack component='form' onSubmit={handleSubmit} spacing={4}>
      <FormControl fullWidth>
        <InputLabel htmlFor='imageUrl'>Ссылка на картинку</InputLabel>
        <OutlinedInput
          id='imageUrl'
          type='url'
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor='name'>Название</InputLabel>
        <OutlinedInput
          id='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor='description'>Описание</InputLabel>
        <OutlinedInput
          id='description'
          value={formData.description}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor='price'>Стоимость </InputLabel>
        <OutlinedInput
          id='price'
          type='number'
          endAdornment={<InputAdornment position='end'>₽</InputAdornment>}
          value={formData.price}
          onChange={handleChange}
          required
        />
      </FormControl>

      <Button type='submit' variant='contained'>
        {mode === 'create' ? 'Создать' : 'Редактировать'}
      </Button>
    </Stack>
  );
}