// pod sciezki
import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import LayoutRoute from '../../../components/LayoutRoute';
import NotFoundView from '../../../views/NotFoundView';

const UsersRoutes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      {/*       <LayoutRoute exact path={match.url} layout={} component={} />
      <LayoutRoute exact path={`${match.url}/new`} layout={} component={} />
      <LayoutRoute exact path={`${match.url}/:id`} layout={} component={} />
      <LayoutRoute
        exact
        path={`${match.url}/:id/edit`}
        layout={}
        component={}
      /> */}
      <LayoutRoute component={NotFoundView} />
    </Switch>
  );
};

export default UsersRoutes;
