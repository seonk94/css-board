import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Appbar from 'src/components/common/Appbar';
import login from 'src/page/login';
import main from 'src/page/main';
import create from 'src/page/create';


function Root() {
  return (
    <BrowserRouter>
      <Appbar />
      <Switch>
        <Route exact
          path="/"
          component={main} />
        <Route exact
          path="/login"
          component={login} />
        <Route exact
          path="/create"
          component={create} />
        <Redirect path="*"
          to="/" />
      </Switch>
      
    </BrowserRouter>
  );
}
export default Root;
