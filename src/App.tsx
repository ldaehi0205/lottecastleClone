import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '~/components/nav/nav';
import detailPage from './components/detail/detailPage';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/main' component={Main}></Route>
        <Route exact path='/detailPage/:id' component={detailPage}></Route>
      </Switch>
    </>
  );
}

export default App;
