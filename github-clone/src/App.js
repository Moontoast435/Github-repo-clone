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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RepositoryListing />}></Route>
          <Route path="/product" element={<RepositoryDetail />}></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
