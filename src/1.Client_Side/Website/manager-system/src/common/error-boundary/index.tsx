import * as React from 'react'

import './index.scss'

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
    state = { hasError: false, error: null };
  
    static getDerivedStateFromError(error: string) {
      return { hasError: true, error };
    }
  
    render() {
      return this.state.hasError ? <Fallback /> : this.props.children;
    }
  }