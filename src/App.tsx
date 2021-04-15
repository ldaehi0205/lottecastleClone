import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '~/components';
import Nav from '~/components/nav/nav';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/main' component={Main}></Route>
      </Switch>
    </>
  );
}

export default App;
