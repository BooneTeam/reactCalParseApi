var Parse = require('parse/node').Parse;

/* GET home page. */
Location = function () {

  var ParseLocation = new Parse.Object("Location");

  var self = this;

  self.getAll = function (req, res, next) {
    var query = new Parse.Query(ParseLocation);
    query.find({
      success: function (users) {
        res.send(users);
      }
    });
  };

  self.getOne = function (req, res, next) {
    var params = req.params;
    var query = new Parse.Query(ParseLocation);
    query.find({
      options:{id:params.id},
      success: function (users) {
        res.send(users);
      }
    });
  };
};

module.exports = new Location;
