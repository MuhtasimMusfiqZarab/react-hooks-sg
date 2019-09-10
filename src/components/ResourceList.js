import React, { Component } from "react";
import axios from "axios";

class ResourceList extends Component {
  state = {
    resources: []
  };

  //will only be called while 1st time mount (not the 2nd time even if refreshes)
  async componentDidMount() {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: result.data }); // axios always gives the result indide of the data
  }

  // called while re-rendering (for parent/ change in component level state)
  async componentDidUpdate(prevProps) {
    // to check difference with current prop & make request if there is a change
    if (prevProps.resource !== this.props.resource) {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resources: result.data }); // axios always gives the result indide of the data
    }
  }
  render() {
    return (
      <div>
        <div>{this.state.resources.length}</div>
      </div>
    );
  }
}

export default ResourceList;
