import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarrinhoCompras from './Pages/CarrinhoCompras';
import InitialPage from './Pages/initialPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitialPage } />
          <Route path="/carrinho" component={ CarrinhoCompras } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
