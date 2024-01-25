// This .on("click") function will trigger the fetch() Call
$("#find-movie").on("click", function (event) {

  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  // Here we grab the text from the input box
  var movie = $("#movie-input").val();

  // Here we construct our URL
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  // Write code between the dashes below to hit the queryURL with fetch(), then take the response data
  // and display it in the div with an id of movie-view

  // ------YOUR CODE GOES IN THESE DASHES.

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $("#movie-view").text(JSON.stringify(data));
    });

  // -----------------------------------------------------------------------

});