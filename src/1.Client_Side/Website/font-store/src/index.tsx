import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import '../styles/style.scss';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app') as HTMLElement
);
registerServiceWorker();
