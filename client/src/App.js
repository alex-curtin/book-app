import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Navbar />
      <section className="container">
        <Switch>
          <Route
            exact path="/login"
            component={Login}
          />
          <Route
            exact path="/register"
            component={Register}
          />
        </Switch>
      </section>
    </Provider >
  );
}

export default App;
