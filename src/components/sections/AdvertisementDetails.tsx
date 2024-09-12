import { Box, CircularProgress, Typography } from '@mui/material';
import { FC } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import COLORS from '@/styles/colors';
import { useParams } from 'react-router-dom';
import { useAdvertisementData } from '@/api/useAdvertisementData';
import { UpdateAdvertisementModal } from '../blocks/UpdateAdvertisementModal';
import ReadMoreText from '../ui/ReadMoreText';

const AdvertisementDetails: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useAdvertisementData(Number(id));
  
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem'
        }}>
          <Box
            component='img'
            src={data.imageUrl}
            alt='advertisement image'
            sx={{
              width: '30%',
              height: '30%',
              objectFit: 'cover',
            }}
          />
          <Box>
            <Typography variant='h6' component={'h2'}>{data.name}</Typography>
            <ReadMoreText component={'p'}>{data.description}</ReadMoreText>
            <Typography component='p'>{data.price} ₽</Typography>
            <Box sx={{
              display: 'flex',
              gap: '.3rem'
            }}>
              <Typography component='p'>{data.views} просмотров</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              gap: '.3rem'
            }}>
              <Typography component='p'>{data.likes}</Typography>
              <FavoriteIcon sx={{ color: COLORS.red }} />
            </Box>
            
            <UpdateAdvertisementModal advertisement={data} />
          </Box>
        </Box>
      )}
    </>
  )
}

export default AdvertisementDetails