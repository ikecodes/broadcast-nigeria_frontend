import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './actions/items';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart } from './components';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Products />
          </Route>
          <Route>
            <Cart exact path='/cart' />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
