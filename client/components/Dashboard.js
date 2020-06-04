import React from "react";
import { graphql } from "react-apollo";

import query from "../queries/userQuery";

import requireAuth from "../hocs/requireAuth";

class Dashboard extends React.Component {
  render() {
    return <div>Dashboard</div>;
  }
}

export default graphql(query)(requireAuth(Dashboard));
