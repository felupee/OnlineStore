import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InitialPage from './Pages/initialPage';
import './App.css';
import ProductDetails from './Pages/ProductsDetails';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitialPage } />
          <Route path="/carrinho" component={ ShoppingCart } />
          <Route path="/product-details/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
