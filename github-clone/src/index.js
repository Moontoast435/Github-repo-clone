// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducer from './store/reducers/reducer';
// import { BrowserRouter } from 'react-router-dom';

// const store = createStore(reducer, applyMiddleware(thunk));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './store/reducers/reducer';
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
