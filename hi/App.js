import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={ProductList} exact />
      <Route path="/cart" component={Cart} />
    </Switch>
  </Router>
);

export default App;
