// pod sciezki
import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import LayoutRoute from '../../../components/LayoutRoute';
import AudioLayout from '../../../layouts/AudioLayout';
import NotFoundView from '../../../views/NotFoundView';
import UploadAudio from '../components/UploadAudio';
const AudioRoutes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <LayoutRoute
        exact
        path={match.url}
        layout={AudioLayout}
        component={UploadAudio}
      />
      {/*       <LayoutRoute
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
      /> */}
      <LayoutRoute component={NotFoundView} />
    </Switch>
  );
};

export default AudioRoutes;
