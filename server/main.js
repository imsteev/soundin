import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  User = new Meteor.Collection('user');
});

Router.route('/users', {where: 'server'})
  /* 
  GET /users - return all users' profile
  */
  .get(function() {
    var response = User.find().fetch();
    this.response.setHeader('Content-Type','application/json');
    this.response.end(JSON.stringify(response));
  })

  /*
  POST /user 
  Adds new user to mongodb
  */
  .post(function(){
    var response;
    User.insert({
      UserName : this.request.body.userName,
      UserPassword: this.request.body.userPassword,
      UserGenre: this.request.body.UserGenre
    })
    this.response.setHeader('Content-Type','application/json');
    this.response.end(JSON.stringify(response));
  })



