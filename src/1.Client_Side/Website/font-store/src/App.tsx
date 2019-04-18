import * as React from 'react';

import Loader from './common/loader'

import ErrorBoundary from './common/error-boundary'

import Header from './common/page/header'

import Footer from './common/page/footer'


import Mailing from './common/page/mailing'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Header />
          <Loader />
          <Mailing />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
