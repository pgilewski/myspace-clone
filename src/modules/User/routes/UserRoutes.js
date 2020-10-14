// pod sciezki
import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import LayoutRoute from '../../../components/LayoutRoute';
import NotFoundView from '../../../views/NotFoundView';

const UsersRoutes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <LayoutRoute
        exact
        path={match.url}
        layout={UserLayout}
        component={AllProfiles}
      />
      <LayoutRoute
        exact
        path={`${match.url}/new`}
        layout={UserLayout}
        component={NewProfile}
      />
      <LayoutRoute
        exact
        path={`${match.url}/:id`}
        layout={UserLayout}
        component={Profile}
      />
      <LayoutRoute
        exact
        path={`${match.url}/:id/edit`}
        layout={UserLayout}
        component={EditProfile}
      />
      <LayoutRoute component={NotFoundView} />
    </Switch>
  );
};

export default UsersRoutes;
