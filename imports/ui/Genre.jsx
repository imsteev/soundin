import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Genre extends Component {
  render() {
    return (
      <h2>Genre: {this.props.title}</h2>
    );
  }
}
 
Genre.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  title: PropTypes.string.isRequired
};