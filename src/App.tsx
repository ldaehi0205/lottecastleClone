import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '~/pages';
import { ExampleContainer } from './containers';

function App() {
  return (
    <Switch>
      <Route path='/example'>
        <ExampleContainer />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
