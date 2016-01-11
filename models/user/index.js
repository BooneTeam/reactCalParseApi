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

  self.getSchedules = function(req,res,next){
    var query = new Parse.Query(new Parse.Object("Schedule"));
    query.equalTo('userId',req.params.id);
    console.log(req.query);
    var d = new Date();
    var todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate());
    todaysDate.setHours(-6);
    todaysDate.setMinutes(0);
    todaysDate.setSeconds(0);
    console.log(todaysDate.toISOString());
    query.greaterThanOrEqualTo( "onDate", new Date(req.query.startDate));
    todaysDate.setDate(todaysDate.getDate() + 1 );
    console.log(todaysDate.toISOString());
    query.lessThanOrEqualTo( "offDate", new Date(req.query.endDate) );
    query.find({
      success: function (schedules) {
        res.send(schedules);
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    })
  };

  self.getOne = function (req, res, next) {
    var params = req.params;
    console.log(params)
    var query = new Parse.Query(Parse.User);
      query.get(params.id,{
      success: function (user) {
        var schedule = new Parse.Object("Schedule");
        schedule.save().then(function(schedule){
          var userRelation = schedule.relation('userId');
          userRelation.add(user);
          schedule.set('test','boogers');
          schedule.save();
        });
        //res.send(userObj);
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
