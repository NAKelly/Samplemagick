import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Page from './_shared/Page';
import Home from './Home';
import About from './About';

import PageNotFound from './PageNotFound'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Page}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="*" component={PageNotFound}/>
      </Route>
    </Router>
  )
}

export default App;

//-----------------------------------------------------//