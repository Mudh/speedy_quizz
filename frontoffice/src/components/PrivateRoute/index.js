import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({
  public: Public,
  private: Private,
  fakeAuth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth ? <Private {...props} /> : <Public {...props} />
    }
  />
);

export default PrivateRoute;
