import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({
  public: Public,
  private: Private,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Private {...props} /> : <Public {...props} />
    }
  />
);

export default PrivateRoute;
