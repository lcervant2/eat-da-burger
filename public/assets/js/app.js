$(".eat-btn").on("click", function(event){
    event.preventDefault(); //prevents button from wanting to do what it normally does, which is to refresh or go to another page
    var burger_id = $(this).attr("id");

    $.ajax({ //this is similar to when we used postman
        method: "PUT",
        url: "/burgers/updateOne/" + burger_id
    }).then(function(data){
        window.location.reload(); //reloads the page
    })
});

$("#new-burger-btn").on("click", function(event){
    event.preventDefault(); //prevents button from wanting to do what it normally does, which is to refresh or go to another page
    var burger_name = $("#burger-input").val().trim();
    if(burger_name === ""){
        alert("Please enter a burger name");
    } else {
        $.ajax({ //this is similar to when we used postman
            method: "POST", //this has to match the controller route
            url: "/burgers/newOne/" + burger_name
        }).then(function(data){
            window.location.reload(); //reloads the page
        })
    }


});

$("#reset-btn").on("click", function(event){
    event.preventDefault(); //prevents button from wanting to do what it normally does, which is to refresh or go to another page

        $.ajax({ //this is similar to when we used postman
            method: "GET", //this has to match the controller route
            url: "/burgers/reset"
        }).then(function(data){
            window.location.reload(); //reloads the page
        })
    });


//user enters a burger name in input box
//user clicks submit button
//burger shows up in uneaten area



//on click:
//read the user input and store it in a variable
//clear the input box
//use ajax(view) to "hit" our controller/route
//controller sends information to model
//model sends information to the ORM
//ORM sends information to the database
//database sends its results back to the ORM
//ORM sends the results back to the model
//model sends results back to the controller
//controller sends results back to the 
