import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import '../styles/main.scss';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('app') as HTMLElement
);
registerServiceWorker();
