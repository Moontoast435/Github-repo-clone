import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';

import * as Pages from './components';
import Api from './components/Api';

function App() {
  return (
    <div id="app">
      <Api></Api>
    </div>
  );
}
export default App;
