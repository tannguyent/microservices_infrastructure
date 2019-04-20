import * as React from 'react'

import './index.scss'

const MISSING_ERROR = 'Error was swallowed during propagation.';

// presentation component
const Fallback = React.memo((props) => {
    return (
        <div className="error-boundary">
            <span>Something went wrong</span>
        </div>
    )
});

// container component 
export default class extends React.Component {
    state = { error: null };
  
	componentDidCatch(error: Error | null, info: object) {
		this.setState({ error: error || new Error(MISSING_ERROR) });
	}

  
    render() {
      return this.state.error ? <Fallback /> : this.props.children;
    }
  }