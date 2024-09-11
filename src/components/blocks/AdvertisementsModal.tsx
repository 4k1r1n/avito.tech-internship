import COLORS from '@/styles/colors';
import { AdvertisementInfo } from '@/types';
import { Box, Button, Modal } from '@mui/material';
import { FC, useState } from 'react';
import { AdvertisementForm } from './AdvertisementForm';

interface AdvertisementsModalProps {
  mode: 'create' | 'edit';
  advertisement?: AdvertisementInfo;
  onSubmit: (data: AdvertisementInfo) => void;
}

export const AdvertisementsModal: FC<AdvertisementsModalProps> = ({ mode, advertisement, onSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const submitHandler = (data: AdvertisementInfo) => {
    onSubmit(data);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        variant='outlined'
        onClick={() => setIsModalOpen(true)}
      >
        {mode === 'create' ? 'Создать объявление' : 'Редактировать объявление'}
      </Button>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: COLORS.white,
            padding: '2.5rem',
            borderRadius: '.5rem',
          }}
        >
          <AdvertisementForm
            onSubmit={submitHandler}
            mode={mode}
            advertisement={advertisement}
          />
        </Box>
      </Modal>
    </>
  );
}