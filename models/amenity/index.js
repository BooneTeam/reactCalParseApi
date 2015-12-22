var Parse = require('parse/node').Parse;

/* GET home page. */
Amenity = function () {

  var ParseAmenity = new Parse.Object("Amenity");

  var self = this;

  self.getAll = function (req, res, next) {
    var query = new Parse.Query(ParseAmenity);
    query.find({
      success: function (users) {
        res.send(users);
      }
    });
  };

  self.getOne = function (req, res, next) {
    var params = req.params;
    var query = new Parse.Query(ParseAmenity);
    query.find({
      options:{id:params.id},
      success: function (users) {
        res.send(users);
      }
    });
  };
};

module.exports = new Amenity;
