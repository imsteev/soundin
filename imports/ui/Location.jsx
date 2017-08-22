import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Location extends Component {
  render() {
    return (
      <h2>{this.props.location.city}, {this.props.location.state}</h2>
    );
  }
}
 
Location.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  location: PropTypes.object.isRequired
};