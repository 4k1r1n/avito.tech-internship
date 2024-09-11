import AdvertisementId from '@/pages/AdvertisementId';
import Advertisements from '@/pages/Advertisements';
import NotFound from '@/pages/NotFound';
import Orders from '@/pages/Orders';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export enum ROUTES {
  Advertisements = 'advertisements',
  AdvertisementId = 'advertisements/:id',
  Orders = 'orders',
  Root = '/',
};

type Route = {
  path: string,
  element: ReactNode
};

export const routes: Route[] = [
  { path: ROUTES.Advertisements, element: <Advertisements /> },
  { path: ROUTES.AdvertisementId, element: <AdvertisementId /> },
  { path: ROUTES.Orders, element: <Orders /> },
  { path: ROUTES.Root, element: <Navigate to={ROUTES.Advertisements} replace /> },
  { path: '*', element: <NotFound /> },
];