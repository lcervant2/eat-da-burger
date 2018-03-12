var orm = require('../config/orm.js');

var burger = {

  selectAll: function(callback){
    function cbModel(burgerInfo){
      callback(burgerInfo)
    }
    orm.selectAll("burgers", cbModel)
  },

  newOne: function(burger_name, callback){
    function cbModel(burgerInfo){
      callback(burgerInfo);
    }
    orm.newOne(burger_name, "burgers", "burger_name", cbModel);
  },

  updateOne: function(burger_id, callback){
    function cbModel(burgerInfo){
      callback(burgerInfo);
    }
    orm.updateOne(burger_id, "burgers", "devoured", cbModel);
  },

  resetAll: function(callback){
    function cbModel(info){
      callback(info);
    }
    orm.resetAll("burgers", "devoured", cbModel);
  }

};


// Pass at the end of the burger.js file.
module.exports = burger;