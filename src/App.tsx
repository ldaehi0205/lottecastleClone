import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {} from '~/components';
import detailPage from './components/detail/detailPage';
import slick from './components/detail/slick';

function App() {
  return (
    <Switch>
      <Route exact path='/'></Route>
      <Route path='/example'>
        <div>Example page</div>
      </Route>
      <Route exact path='/detailPage' component={detailPage} />
      <Route exact path='/' component={slick} />
    </Switch>
  );
}

export default App;
