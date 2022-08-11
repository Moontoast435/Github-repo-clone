import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import { Route, Router, Routes } from 'react-router-dom';
import RepositoryDetail from './containers/RepositoryDetail';
import { BrowserRouter } from 'react-router-dom';
import RepositoryListing from './containers/RepositoryListing';

function App() {
  return (
    <div className="App">
      <Header />
      <RepositoryListing />
      <RepositoryDetail />
    </div>
  );
}

export default App;
