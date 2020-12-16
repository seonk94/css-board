import React from 'react';
import { Redirect, Route } from 'react-router';

function AuthRoute({ user, component : Component, path, ...rest } : any) {
  const render = (props : any) => <Component {...props} />;
  return (
    user 
      ? <Route path={path}
        render={render}
        {...rest}/>
      : <Redirect to={{ pathname : '/login' }}/>
  );
}

export default AuthRoute;