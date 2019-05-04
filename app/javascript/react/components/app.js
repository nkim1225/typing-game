import React from 'react';
import { Router, browserHistory, Route } from 'react-router';
import GameContainer from './../containers/GameContainer';

export const App = props => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={GameContainer} />
      </Router>
    </div>
  );
};

export default App;
