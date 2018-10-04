"use strict";

//@Theepan Thevathasasn
//Created : 03-10-2018
//Last updated : 03-10-2018

// **Send movie list as json**
// 1. Process request type - all movies or filtered
// 1. Compose Data
// 2. Compose JSON
// 3. Return JSON

var http = require("http");
var getMovies = require("./movie"); //contains function to return movie objects

//Reqest and Response Handler
var server = http.createServer(function (req, res) {
  console.log("request made at " + req.url);
  var movies = null;

  //routing to request all movies
  if (req.url === "/movies") {
    res.writeHead(200, { "Content-Type": "application/json" });

    getMovies(function (movies) {
      for (i = 0; i < movies.length; i++) {
        console.log("movie #:" + (i + 1) + " ID: " + movies[i].id + " Title: " + movies[i].title);
      }
      //Assign JSON object as string
      movies = JSON.stringify(movies, null, 4);
      //send json as string
      res.end(movies);
    });
  }
});
server.listen(process.env.PORT || 5000);
//# sourceMappingURL=movieList.js.map