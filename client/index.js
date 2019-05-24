import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import AboutPage from './containers/AboutPage';
import UpdatesPage from "./containers/UpdatesPage";
import HomePage from './containers/HomePage';
import store from "./store";
import 'react-calendar-heatmap/dist/styles.css';
import './scss/app.scss';
import PrivateRoute from "./containers/PrivateRoute";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <PrivateRoute path="/updates" component={UpdatesPage} />
      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));


  