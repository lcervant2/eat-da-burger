// require our modules
var PORT = process.env.Port || 3000
var methodOverride = require('method-override')
var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

// create our server instance
var app = express();

// create our port number and save it to a variable
var port = 3000;

//allows us to use a PUT request in our button api call
app.use(methodOverride('_method'))

// use our public folder as a static folder to make our assets available
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
// https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express
app.use(bodyParser.urlencoded({ extended: true })) 
// parse application/json
app.use(bodyParser.json())

// tell express which templating engine we want to use when we say app.render
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// include our routes/controller
var routes = require("./controllers/burgersController.js");
app.use(routes);


//start our server on our port and send a message when successful
app.listen(port, function(){
    console.log("your app is running at http://localhost:" + port);;
});


// extra tools:
//nodemon is a package that allows us to run our project without having to save and restart constantly
//npm install nodemon -g (to install it globally);








//side notes
//everytime we see "app", remember that it is our express instance


//MVC MODEL VIEW CONTROLLER

//MODEL interacting with database  //work together with me
//CONTROLLER/ROUTES gather data based on different /routes
//VIEWS what the user sees, what is rendered on the page


//things to work towards:
// review the assignments/activities with mysql/models
//work on designing the look of your page
//review the example video, so you clearly understand the requirements of the application, try to picture how all of the pieces work together