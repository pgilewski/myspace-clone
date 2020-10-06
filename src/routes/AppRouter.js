import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import LayoutRoute from '../components/LayoutRoute';
import AppLayout from '../layouts/AppLayout';

import NotFoundView from '../views/NotFoundView';

// routes: main, users, posts, picures, music, drive, yt
const routes = [
  {
    path: '/main',
    label: 'Main',
    component: React.lazy(() => import('../views/Dashboard')),
    layout: AppLayout,
  },
  {
    path: '/pictures',
    label: 'Pictures',
    component: React.lazy(() => import('../views/PicturesView')),
    layout: AppLayout,
  },
  {
    path: '/login',
    label: 'Login page',
    component: React.lazy(() => import('../views/LoginView')),
    layout: AppLayout,
  },
];

const AppRouter = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/main' />
      {routes.map((route) => (
        <LayoutRoute
          key={route.path}
          path={route.path}
          layout={route.layout}
          component={route.component}
        />
      ))}
      <LayoutRoute layout={AppLayout} component={NotFoundView} />
    </Switch>
  );
};

export { routes };
export default AppRouter;
