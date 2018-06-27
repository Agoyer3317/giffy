let animalArray = ['dog', 'cat', 'horse'];
for (let i = 0; i < animalArray.length; i++) {
    $('#buttons').append("<button type='button' class='animalButton' data-type='"+ animalArray[i]+"'>" + animalArray[i]+ "</button>");// last array is value within the button
};//closes loop

$( document ).ready(function() {
    
    $(document).on('click', ".animalButton", function() {
        console.log($(this).attr("data-type"));
        let animal = $(this).attr("data-type")
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=yAf82Bt4EtoA5kLLRU4JlaOmUZaBny6W&limit=10";
        
        $.ajax(queryURL, { 
            method: "GET"
          }).then(function(response) {
            console.log(response.data);
            
            for (let i = 0; i < response.data.length; i++) {
                let rating = response.data[i].rating
                let stillImg = response.data[i].images.fixed_height_still.url
                let animatedImg = response.data[i].images.fixed_height.url
                console.log(rating);
                console.log(stillImg);
                console.log(animatedImg);
                $('#giffys').append("<img src='"
                + stillImg+
                "' data-animate='"+ animatedImg +"' data-still='"+ stillImg +"'>");
            }//closes loop
          });//closes then

          




        //yAf82Bt4EtoA5kLLRU4JlaOmUZaBny6W
        // "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yAf82Bt4EtoA5kLLRU4JlaOmUZaBny6W&limit=5" query url
    })


});