//@Theepan Thevathasasn
//Created : 03-10-2018
//Last updated : 03-10-2018

// **Send movie list as json**
import { createServer } from "http";
import getMovies from "./movie"; //contains function to return movie objects

//Reqest and Response Handler
const server = createServer((req, res) => {
  console.log("request made at " + req.url);
  let movies = null;

  //routing to request all movies
  if (req.url === "/movies") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", [
      "Origin, X-Requested-With, Content-Type, Accept"
    ]);
    res.writeHead(200, { "Content-Type": "application/json" });
    //console.log(res.getHeaders());

    getMovies(function(movies) {
      movies.forEach(movie => {
        console.log(
          `movie #: ${movies.indexOf(movie) + 1} ID:${movie.id} Title: ${
            movie.title
          }`
        );
      });

      //Assign JSON object as string
      movies = JSON.stringify(movies, null, 4);
      //send json as string
      res.end(movies);
    });
  }
});
server.listen(process.env.PORT || 5000);
