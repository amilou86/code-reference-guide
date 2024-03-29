/* eslint-disable prettier/prettier */
$(document).ready(function () {

    var apiURL = "https://gnews.io/api/v4/search?";
    var key = "&country=us&max=10&token=d06b56befd778f95afde57c26ebc9890";
    var searchString = "";
    var queryURL;
    var articleNumber = 0;


    $(".clear").click(function () {
        articleNumber = 0;
        $("#search-string").val("");
        $("#article-results").empty();
    });

    $(".search").on("click", function () {
        $("#article-results").empty();
        articleNumber = 0;
        searchString = $("#search-string").val();
        queryURL = apiURL + "q=" + searchString + key;
        console.log('query: ', queryURL)

        fetch(queryURL)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                console.log(data.articles);
                for (i = 0; i < data.articles.length; i++) {
                    articleNumber++;
                    var article = $("<div>");
                    article.addClass("well well-lg row");
                    var title = $("<h3>");
                    title.addClass("title");
                    title.text(data.articles[i].title);
                    var description = $("<p>");
                    description.addClass("description");
                    description.text(data.articles[i].description);
                    var number = $("<div class='articleNumber'>").text(articleNumber);
                    $(article).append(number, title, description);
                    $("#article-results").append(article);
                }
            });
    });


});