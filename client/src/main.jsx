import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import Product from './pages/Product.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css';
import Cart from './pages/Cart.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'productList', element: <ProductList /> },
      { path: 'product', element: <Product /> },
      { path: 'cart', element: <Cart/>}
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)
