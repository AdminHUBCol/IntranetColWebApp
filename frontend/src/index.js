import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import store from './StateManagement/Stores/Index';

import './index.css';
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";

// PrimeReact
import "primereact/resources/themes/mdc-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import 'primeflex/primeflex.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);
