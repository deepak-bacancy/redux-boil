import React from 'react';
import './App.css';
import Header from './containers/Headers';
import ProductListing from './containers/ProductListing';
//import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Header/>} />
          <Route path="/products" exact element={<ProductListing/>} />
          <Route path="/products/:productID" exact element={<ProductDetail/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
