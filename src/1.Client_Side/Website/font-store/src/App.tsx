import * as React from 'react';

import Loader from './common/loader'

import ErrorBoundary from './common/error-boundary'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <header className="App-header">
            <h1 className="App-title">Welcome to React Application</h1>
          </header>
          <p className="App-intro">
            <Loader />
          </p>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
