var Parse = require('parse/node').Parse;

/* GET home page. */
Schedule = function () {

  var ParseSchedule = new Parse.Object("Schedule");

  var self = this;

  self.getAll = function (req, res, next) {
    var query = new Parse.Query(ParseSchedule);
    query.find({
      success: function (users) {
        res.send(users);
      }
    });
  };

  self.getOne = function (req, res, next) {
    var params = req.params;
    var query = new Parse.Query(ParseSchedule);
    query.find({
      options:{id:params.id},
      success: function (users) {
        res.send(users);
      }
    });
  };
};

module.exports = new Schedule;
