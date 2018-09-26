import React from 'react';

export default function withErrorBoundary(WrappedComponent) {
  return class extends React.Component {
    state = {
      error: null,
      info: null
    };
    componentDidCatch(error, info) {
      console.warn('Oops', error, info);
      this.setState({ error, info });
    }

    render() {
      const { error, info } = this.state;
      if (error) {
        return (
          <pre>
            {error.message}
            {info.componentStack}
          </pre>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}
