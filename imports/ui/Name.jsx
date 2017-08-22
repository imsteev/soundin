import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Name extends Component {
  render() {
    return (
      <h1>{this.props.name.firstName} {this.props.name.lastName}</h1>
    );
  }
}
 
Name.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  name: PropTypes.object.isRequired
};