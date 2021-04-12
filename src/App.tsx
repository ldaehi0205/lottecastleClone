import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/example'>
        <div>Example page</div>
      </Route>
      <Route path='/'>
        <div>Home</div>
      </Route>
    </Switch>
  );
}

export default App;
