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
    onNavbar: true,
  },
  {
    path: '/pictures',
    label: 'Pictures',
    component: React.lazy(() => import('../views/PicturesView')),
    layout: AppLayout,
    onNavbar: true,
  },
  {
    path: '/documents',
    label: 'Documents',
    component: React.lazy(() => import('../views/Documents')),
    layout: AppLayout,
    onNavbar: true,
  },
  {
    path: '/login',
    label: 'Login page',
    component: React.lazy(() => import('../views/LoginView')),
    layout: AppLayout,
    onNavbar: false,
  },
  {
    path: '/audio',
    label: '',
    component: React.lazy(() => import('../modules/Audio/Audio')),
    layout: AppLayout,
    onNavbar: false,
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
