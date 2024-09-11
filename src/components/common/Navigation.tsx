import { ROUTES } from '@/router/routes';
import COLORS from '@/styles/colors';
import { Box } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const navbarLinks = [
  { name: 'Объявления', route: ROUTES.Advertisements },
  { name: 'Заказы', route: ROUTES.Orders }
];

const Navigation: FC = () => {
  return (
    navbarLinks.map((link) => (
      <Box
        key={link.route}
        component={NavLink}
        to={link.route}
        sx={{
          textTransform: 'uppercase',
          color: COLORS.black,
          '&.active': {
            textDecoration: 'underline',
          },
          '&:hover': {
            color: COLORS.additional,
          },
        }}
      >
        {link.name}
      </Box>
    ))
  )
}

export default Navigation