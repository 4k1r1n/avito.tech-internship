import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ERoutes, routes } from './routes'
import Layout from '../components/common/Layout'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={ERoutes.Root} element={<Layout />}>
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
