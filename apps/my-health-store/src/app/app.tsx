import { Provider as UsersProvider } from 'jotai';
import './app.module.css';
import RouterDOM from './router/RouterDOM';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql';

export function App() {
  return (
    <div>
      <UsersProvider>
        <ApolloProvider client={client}>
          <RouterDOM />
        </ApolloProvider>
      </UsersProvider>
    </div>
  );
}

export default App;
