var orm = require('../config/orm.js');

var burger = {

  selectAll: function(callback){
    function cbModel(burgerInfo){
      callback(burgerInfo)
    }
    orm.selectAll("burgers", cbModel)
  },

  insertOne: function(burger_name, callback){
    orm.insertOne(burger_name, function(res){
      callback(res);
    });
  },

  updateOne: function(burger_id, callback){
    orm.updateOne(burger_id, function(res){
      callback(res);
    });
  }

};


// Pass at the end of the burger.js file.
module.exports = burger;
