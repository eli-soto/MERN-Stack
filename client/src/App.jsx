import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/Navbar';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});
function App(){
  return (
    <ApolloProvider client={client}>
    <div className ="flex-col justify-center align-center min-100-vh bg-primary">
      <Navbar />
      <Outlet />
      </div>
    </ApolloProvider>
  )
}


export default App;