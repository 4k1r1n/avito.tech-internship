import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES, routes } from './routes';
import Layout from '../components/common/Layout';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.Root} element={<Layout />}>
        {routes.map((route) =>
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        )}
      </Route>
    </Routes>
  )
}

export default AppRouter
