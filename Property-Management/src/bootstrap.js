import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import HeaderWrapper from './components/headerWrapper';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <HeaderWrapper>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </HeaderWrapper>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector('.app-wrapper')
  );
}

document.addEventListener('DOMContentLoaded', main);
