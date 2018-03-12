// include our express code again
var express = require("express");
var burger = require("../models/burger.js");

// use the Router functionality of express;
// https://expressjs.com/en/guide/routing.html why use router instead of get? https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get
var router = express.Router(); 

//just demonstrating that you can pass an object to the render method and it will render this information if you have these properties set in your handlebars file

// var productsData = {
//     number: 12,
//     name: "David",
//     hour: "11 am"
// }

// router.get("/", function(request, response){
//     response.render("index", {number: 50}); //passing in an object for index.handlebars to render
// });

// router.get("/products", function(req, res){
//     res.render("products", productsData); //here we use the object from line 10 for products.handlebars to render
// });

// router.get("/davidkanwisher", function(req, res){
//     res.send("The best tutor ever");
// });
router.get('/', function(req, res) {
    res.redirect('/burgers');
})

router.get('/burgers', function(req, res) {
    function cbController(burgerInfo){
        res.render("index", {burgers: burgerInfo});
    }
    burger.selectAll(cbController);
})

router.post('/burgers/newOne/:burger_name', function(req, res) {
    var burgerName = req.params.burger_name;
    function cbController(burgerInfo){
        console.log(burgerInfo);
        res.sendStatus(200);
    }
    burger.newOne(burgerName, cbController);
})

router.put('/burgers/updateOne/:burger_id', function(req, res) {
    var burgerID = req.params.burger_id;
    function cbController(burgerInfo){
        res.sendStatus(200);
    }
    burger.updateOne(burgerID, cbController);
})

router.get('/burgers/reset', function(req, res) {
    function cbController(burgerInfo){
        res.sendStatus(200);
    }
    burger.resetAll(cbController);
})

module.exports = router; //if we are going to require something later (like in our server.js file) we must export what we want to include in other files



//non router example


// function routes(app) {
//         app.get('/', function (req, res) {
//         res.render('index');
//     });
    
//     app.get('/products', function (req, res) {
//         res.render('products');
//     });
// }

// module.exports = routes;

//a callback is a function that is executed by another function, usually when