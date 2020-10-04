import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const LayoutRoute = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Suspense fallback={<h3>loading...</h3>}>
            <Component {...matchProps} />
          </Suspense>
        </Layout>
      )}
    />
  );
};

LayoutRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default LayoutRoute;
