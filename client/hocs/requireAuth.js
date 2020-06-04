import React from "react";
import { hashHistory } from "react-router";

const requireAuth = (Component) => {
  class ComposedComponent extends React.Component {
    componentWillMount() {
      if (!this.props.data.user) {
        hashHistory.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.data.user) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return ComposedComponent;
};

export default requireAuth;
