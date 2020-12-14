import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Appbar from 'src/components/common/Appbar';
import login from 'src/page/login';
import main from 'src/page/main';
import create from 'src/page/create';
import { useMediaQuery } from '@material-ui/core';
import BottomNavigator from 'src/components/common/BottomNavigatior';
import setting from 'src/page/setting';
import { firebaseAuth } from 'src/provider/AuthProvider';

function Root() {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <BrowserRouter>
      {matches && <Appbar/>}
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
        <Route exact
          path="/setting"
          component={setting} />
        <Redirect path="*"
          to="/" />
      </Switch>
      {!matches && <BottomNavigator/>}
    </BrowserRouter>
  );
}
export default Root;
