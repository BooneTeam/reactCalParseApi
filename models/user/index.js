var Parse = require('parse/node').Parse;

/* GET home page. */
User = function () {
  var self = this;

  self.getAll = function (req, res, next) {
    var query = new Parse.Query(Parse.User);
    query.find({
      success: function (users) {
        res.send(users);
      }
    });
  };

  self.getOne = function (req, res, next) {
    var params = req.params;
    var query = new Parse.Query(Parse.User);
    query.find({
      options: {id: params.id},
      success: function (users) {
        res.send(users);
      }
    });
  };

  self.create = function (req, res, next) {
    console.log(req.body)
    console.log(req.params)
    if (req.body.username && req.body.password) {
      var user = new Parse.User;
      user.signUp({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }).then(function (user) {
        console.log(user)
      }, function (error) {
        console.log(error)
      });
    }
  };
}
;

module.exports = new User;
