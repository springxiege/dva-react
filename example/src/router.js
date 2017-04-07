import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import About from './routes/AboutPage';
import Index from './routes/Index/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path="/Index" component={Index} />
        <Route path="/About" component={About} />
    </Router>
  );
}

export default RouterConfig;
