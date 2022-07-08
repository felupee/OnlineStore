import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarrinhoCompras from './Pages/CarrinhoCompras';
import InitialPage from './Pages/initialPage';
import ItemsFromCategories from './Pages/ItemsFromCategories';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitialPage } />
          <Route path="/carrinho" component={ CarrinhoCompras } />
          <Route path="/items/:category" component={ ItemsFromCategories } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
