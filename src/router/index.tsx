import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Appbar from 'src/components/Appbar';
import login from 'src/page/login';
import main from 'src/page/main';
import create from 'src/page/create';
import { useMediaQuery } from '@material-ui/core';
import BottomNavigator from 'src/components/BottomNavigatior';
import setting from 'src/page/setting';
import { firebaseAuth } from 'src/provider/AuthProvider';
import AuthRoute from './AuthRoute';
import dDay from 'src/page/dDay';

function Root() {
  const matches = useMediaQuery('(min-width:600px)');
  const { user } = useContext(firebaseAuth);

  return (
    <>
      {matches && <Appbar/>}
      <Switch>
        <Route exact
          path="/login"
          component={login} />
        <AuthRoute exact
          path="/create"
          user={user}
          component={create} />
        <AuthRoute exact
          path="/d-day/:id"
          user={user}
          component={dDay} />
        <AuthRoute exact
          path="/setting"
          user={user}
          component={setting} />
        <AuthRoute
          exact
          path="/"
          user={user}
          component={main} />
        <AuthRoute 
          path="*"
          to="/" />
      </Switch>
      {!matches && <BottomNavigator/>} 
    </>
  );
}
export default Root;
