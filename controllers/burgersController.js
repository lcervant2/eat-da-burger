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

router.get('/burgers', function(req, res) {
    function cbController(burgerInfo){
        console.log(burgerInfo);
        res.render("index", {burgers: burgerInfo});
    }
    burger.selectAll(cbController);
})

router.post('/burger/add', function(req, res) {
    orm.insertOne(req.body.burger_name, req.body.devoured, function(err, result) {
        if (err) {
            console.log(err)
            return res.send(err)
        }

        return res.json({status: 200})
    })
})

router.post('/burger/:id/update', function(req, res) {
    orm.updateOne(req.params.id, req.body, function(err, result) {
        if (err) return res.json(err)
        console.log(result)
        return res.send('updating')
    })
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