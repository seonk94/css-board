import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const { user } = useContext(firebaseAuth);

  useEffect(() => {
    if (!user) history.push('/login');
  }, []);

  useEffect(() => {
    let mounted = true;
    return () => { 
      history.listen(location => {
        if (!user && location.pathname !== '/login') history.push('/login');
      });
      mounted = false; 
    };
  }, [history]);
  return (
    <>
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
    </>
  );
}
export default Root;
