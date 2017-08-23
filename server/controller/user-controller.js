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
        UserName : this.request.body.username,
        UserPassword: this.request.body.userpassword,
        UserGenre: this.request.body.usergenre
    })
    this.response.setHeader('Content-Type','application/json');
    this.response.end(JSON.stringify(response));
    })

Router.route('/users/:id', {where: 'server'})

    /*
    PUT /user
    update user in mongodb
    */
    .put(function() {
        var response;
        if(this.params.id !== undefined) {
            var user = User.find({_id : this.params.id}).fetch();
            if (user.length > 0) {
                var updateResponse = User.update({_id : user[0]._id}, 
                    {  $set : {
                        UserName : this.request.body.username,
                        UserPassword : this.request.body.userpasswords,
                        UserGenre : this.request.body.usergenre
                    }
                })
                // error handling here
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })

    /*
    DELETE /user
    delete user in mongodb
    */
    .delete(function(){
        var response;
        if(this.params.id !== undefined) {
            var user = User.find({_id : this.params.id}).fetch();
            if (user.length > 0) {
                var deleteResponse = User.remove(user[0]._id);
                // error handling here
            }
        }
        this.response.setHeader('Content-Type', 'application/json');
        this.response.end(JSON.stringify(response));
    })