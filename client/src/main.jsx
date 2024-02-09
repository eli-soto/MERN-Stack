import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';

// Create Apollo Client instance
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// Create a browser router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
]);

// Render the application with createRoot
createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ApolloProvider>
);
