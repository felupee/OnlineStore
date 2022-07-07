import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InitialPage from './Pages/initialPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitialPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
