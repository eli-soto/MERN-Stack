import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home'
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Home />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
