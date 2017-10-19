
      // Initial array
      var gifs = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

      //Initializing page
      $(document).ready(function(){
        renderButtons();
      })

      //creating function to render buttons from array
      function renderButtons() {
        //empty current buttons
        $("#gif-buttons").empty();

        var giphy = $(this).attr("id");

        //created a for loop that runs through array
        for (var i = 0; i < gifs.length; i++) {

          //created a button variable that pulls in gifs from array - makes button
          var button = $("<button>" + gifs[i] + "</button>");
          //add "gif" class to button
          button.addClass("gifbutton");
          //gave button attribute of "id" and gifs array pulled in
          button.attr("id", gifs[i]);
          //"gif buttons" display is appended to button variable
          $("#gif-buttons").append(button);
        }
      }

      //"add-gif" search button on click, given the button class from above ".gif", functions
      $("#add-gif").on("click", ".gif", function() {
        //prevent refresh
        event.preventDefault();
        //create random variable to generate random gif later
        //var random = randomNumberGenerator();

        //empties the gifs that are displaying to queue a new gif search
        $("gif-display").empty();

        //calling the API using the "id" attribute from the button above ~ this refers to the array?
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=Glah83UZC77bEJcW2D8WAtoWz707rDkJ&limit=10");
        
        //on done, pulls in the data from the API
        xhr.done(function(data) { 
          //runs a for loop through the data
          for(var i = 0; i < 10; i++){
            //creates the URL variable to pull in the giphy data in the original size for preview
            var url = data.data[i].images.original_still.url;
            //creates image variable to pull in image source from API
            var image = $('<img src=' + url + '>');
            //adds image class to image variable
            image.addClass("image");
            //creates rating variable to pull in the data's rating
            var rating = data.data[i].rating;
            //creates variable to display the rating using html elements
            var ratingDisplay = $("<p>").text("Rating: " + rating);
            //attaches the rating to the rating display using a class
            ratingDisplay.addClass("rating");
            //using the "gif-display" div, this appends the image and rating display to show
            $("#gif-display").append(image); 
            $("#gif-display").append(ratingDisplay); 
          }

      //using the search button id, on click function  
      $(".add-gif").on("click", function(){
        //pushes "gif-input" from the search to the gif button class and renders a button
        var input = $(".gif-input").val().trim()
        gifbutton.push(input);
        renderButtons();
      });

      //calls render buttons outside of the function for loading purposes
      renderButtons();
    });
  })







