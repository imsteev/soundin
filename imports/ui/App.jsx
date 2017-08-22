import React, { Component } from 'react';
 
import Profile from './Profile.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  getName() {
      return { firstName: 'Stephen', lastName: 'Chung' }
  }

  getLocation() {
      return {city: 'weston', state: 'florida'}
  }

  getGenre() {
      return 'classical';
  }
  
  render() {
    return (
      <div className="container">
        <Profile name={this.getName()} location={this.getLocation()} genre={this.getGenre()} />
      </div>
    );
  }
}