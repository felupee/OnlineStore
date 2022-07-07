import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  
  return (
    <div className="App">
     { getCategories() }
    </div>
  );
}

export default App;
