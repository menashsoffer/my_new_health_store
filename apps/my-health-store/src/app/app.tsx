import { Provider as UsersProvider } from 'jotai';
import './app.module.css';
import RouterDOM from './router/RouterDOM';
import Layout from './features/layout/Layout';

export function App() {
  return (
    <div>
      <UsersProvider>
        <RouterDOM />
      </UsersProvider>
    </div>
  );
}

export default App;
