"use strict";

var _http = require("http");

var _movie = require("./movie");

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//contains function to return movie objects

//Reqest and Response Handler
//@Theepan Thevathasasn
//Created : 03-10-2018
//Last updated : 03-10-2018

// **Send movie list as json**
var server = (0, _http.createServer)(function (req, res) {
  console.log("request made at " + req.url);
  var movies = null;

  //routing to request all movies
  if (req.url === "/movies") {
    res.writeHead(200, { "Content-Type": "application/json" });

    (0, _movie2.default)(function (movies) {
      movies.forEach(function (movie) {
        console.log("movie #: " + (movies.indexOf(movie) + 1) + " ID:" + movie.id + " Title: " + movie.title);
      });

      //Assign JSON object as string
      movies = JSON.stringify(movies, null, 4);
      //send json as string
      res.end(movies);
    });
  }
});
server.listen(process.env.PORT || 5000);
//# sourceMappingURL=movieList.js.map