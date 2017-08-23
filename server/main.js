import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  User = new Meteor.Collection('user');
});



