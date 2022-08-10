import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles';
import App from './App';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import store from './store';

ReactDOM.render(
  <BrowserRouter>

      <App />
  
  </BrowserRouter>,
  document.getElementById('root')
)
