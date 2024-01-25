// This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Bujumbura,Burundi&appid=" + APIKey;

// Here we run our Fetch call to the OpenWeatherMap API
fetch(queryURL)
  .then(function (response) {
    // Calling .json() to access the json data stored inside the returned promise
    return response.json();
  })
  // We store all of the retrieved data inside of an object called "data"
  .then(function (data) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(data);

    // Transfer content to HTML
    $(".city").html("<h1>" + data.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + data.wind.speed);
    $(".humidity").text("Humidity: " + data.main.humidity);

    // Convert the temp to Celsius
    var tempC = data.main.temp - 273.15;

    // add temp content to html
    $(".temp").text("Temperature (K) " + data.main.temp);
    $(".tempC").text("Temperature (C) " + tempC.toFixed(2));

    // Log the data in the console as well
    console.log("Wind Speed: " + data.wind.speed);
    console.log("Humidity: " + data.main.humidity);
    console.log("Temperature (C): " + tempC);
  });