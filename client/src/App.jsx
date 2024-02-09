import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import ProductList from './ProductList';
import Product from './Product';
import NotFound from './NotFound';

const App = () => {
  // Get the current URL path
  const currentPath = window.location.pathname;

  // Render the corresponding component based on the URL path
  const renderComponent = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/products':
        return <ProductList />;
      case '/product/:id':
        return <Product />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div>
      <Navbar />
      {renderComponent()}
    </div>
  );
};

export default App;