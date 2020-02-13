import React from 'react';
import ProductsDirectory from './components/ProductsDirectory';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

const App = () => (
    <div className="container">
      <div className="menu-products">
        <ProductsDirectory />
      </div>
      {/* <div className="menu-carrito">
        <ShoppingCart />
      </div> */}
    </div>
);

export default App;