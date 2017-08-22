import React, { Component, PropTypes } from 'react';
import Name from './Name.jsx';
import Location from './Location.jsx';
import Genre from './Genre.jsx';

// Task component - represents a single todo item
export default class Profile extends Component { 
  render() {
    return (
      <div className="container">
        <Name name={this.props.name} />
        <Location location={this.props.location} />
        <Genre title={this.props.genre} />
      </div>
    );
  }
}
 
Profile.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  name: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};