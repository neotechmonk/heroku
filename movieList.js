//@Theepan Thevathasasn
//Created : 03-10-2018
//Last updated : 03-10-2018

// **Send movie list as json**
// 1. Process request type - all movies or filtered
// 1. Compose Data
// 2. Compose JSON
// 3. Return JSON

import { createServer } from "http";
import getMovies from "./movie"; //contains function to return movie objects

//Reqest and Response Handler
const server = createServer((req, res) => {
  console.log("request made at " + req.url);
  let movies = null;

  //routing to request all movies
  if (req.url === "/movies") {
    res.writeHead(200, { "Content-Type": "application/json" });

    getMovies(function(movies) {
      console.log("first movie : " + movies[0].title);
      //Assign JSON object as string
      movies = JSON.stringify(movies,null, 4);
      //send json as string
      res.end(movies);
    });
  }
});
server.listen(process.env.PORT || 5000);
