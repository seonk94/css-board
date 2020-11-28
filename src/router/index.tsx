import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Appbar from 'src/components/common/Appbar';
import main from 'src/page/main';


function Root() {
  return (
    <BrowserRouter>
      <Appbar />
      <Switch>
        <Route exact path="/" component={main} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default Root;
