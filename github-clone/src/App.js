import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import { Route, Router, Routes } from 'react-router-dom';
import ProductDetail from './containers/ProductDetail';
import { BrowserRouter } from 'react-router-dom';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="/product" element={<ProductDetail />}></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
