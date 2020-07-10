import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './components/layout/GlobalStyles';

import Navbar from './components/layout/Navbar';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import SearchBooks from './components/pages/SearchBooks';
import Dashboard from './components/pages/Dashboard';
import SingleBook from './components/pages/SingleBook';

import PrivateRoute from './components/routing/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/books' component={SearchBooks} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute
          exact
          path='/:list_name/:book_id'
          component={SingleBook}
        />
      </Switch>
    </Provider>
  );
};

export default App;
