import * as ReactDOM from 'react-dom/client';
import './styles.css';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
