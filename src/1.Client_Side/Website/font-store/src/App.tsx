import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './route';

import Loader from './common/loader'

import ErrorBoundary from './common/error-boundary'

import Header from './common/page/header'

import Footer from './common/page/footer'

class App extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Loader />}>
        <BrowserRouter>
          <ErrorBoundary>
            <React.Fragment>
              <Header />
              <Routes />
              <Footer />
            </React.Fragment>
          </ErrorBoundary>
        </BrowserRouter>
      </React.Suspense>
    );
  }
}

export default App;
