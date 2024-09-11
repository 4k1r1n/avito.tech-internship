import { AdvertisementInfo } from '@/types';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FC } from 'react';
import COLORS from '@/styles/colors';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/routes';

export type CardProps = {
  advertisement: AdvertisementInfo;
};

const AdvertisementCard: FC<CardProps> = ({ advertisement }) => {
  const navigate = useNavigate();

  const navigateToAdvertisement = (id: AdvertisementInfo['id']) => {
    navigate(`/${ROUTES.Advertisements}/${id}`, { replace: true });
  };

  return (
    <Grid
      size={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
      }}
      onClick={() => navigateToAdvertisement(advertisement.id)}
    >
      <Box
        sx={{
          width: '100%',
          height: '12rem',
        }}
      >
        <Box
          component='img'
          src={advertisement.imageUrl}
          alt='advertisement image'
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
          }}
        />
      </Box>

      <Box
        sx={{
          padding: '1rem',
          backgroundColor: COLORS.white,
          borderBottomLeftRadius: '.5rem',
          borderBottomRightRadius: '.5rem',
        }}
      >
        <Typography variant='h6' component={'h2'}>{advertisement.name}</Typography>
        <Typography component='p'>{advertisement.price} ₽</Typography>
        <Box sx={{
          display: 'flex',
          gap: '.3rem'
        }}
        >
          <Typography component='p'>{advertisement.views} просмотров</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          gap: '.3rem'
        }}
        >
          <Typography component='p'>{advertisement.likes}</Typography>
          <FavoriteIcon sx={{ color: COLORS.red }} />
        </Box>
      </Box>
    </Grid>
  );
}

export default AdvertisementCard