import { AdvertisementInfo } from '@/types';
import { Box, Skeleton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FC, useState } from 'react';
import COLORS from '@/styles/colors';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/router/routes';

export type CardProps = {
  advertisement: AdvertisementInfo;
};

const AdvertisementCard: FC<CardProps> = ({ advertisement }) => {
  const [isImgLoading, setImgLoading] = useState(true);

  return (
    <Grid size={3}>
      <Link
        to={`/${ROUTES.Advertisements}/${advertisement.id}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '12rem',
            position: 'relative',
          }}
        >
          {isImgLoading && (
            <Skeleton
              variant='rectangular'
              sx={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          )}
          <Box
            component='img'
            src={advertisement.imageUrl}
            alt='advertisement image'
            onLoad={() => setImgLoading(false)}
            sx={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              objectFit: 'cover',
              borderTopLeftRadius: '.5rem',
              borderTopRightRadius: '.5rem',
              opacity: isImgLoading ? 0 : 1,
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
          <Typography variant='h6' component={'h2'}>
            {advertisement.name}
          </Typography>
          <Typography component='p'>{advertisement.price} ₽</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '.3rem',
            }}
          >
            <Typography component='p'>
              {advertisement.views} просмотров
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '.3rem',
            }}
          >
            <Typography component='p'>{advertisement.likes}</Typography>
            <FavoriteIcon sx={{ color: COLORS.red }} />
          </Box>
        </Box>
      </Link>
    </Grid>
  );
}

export default AdvertisementCard