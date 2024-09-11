import AdvertisementId from '@/pages/AdvertisementId';
import Advertisements from '@/pages/Advertisements';
import NotFound from '@/pages/NotFound';
import Orders from '@/pages/Orders';
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export enum ERoutes {
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
  { path: ERoutes.Advertisements, element: <Advertisements /> },
  { path: ERoutes.AdvertisementId, element: <AdvertisementId /> },
  { path: ERoutes.Orders, element: <Orders /> },
  { path: ERoutes.Root, element: <Navigate to={ERoutes.Advertisements} replace /> },
  { path: '*', element: <NotFound /> },
];