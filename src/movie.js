var fs = require("fs");

//Return all movies as array of Movie objects
function getMovies(callBack) {
  let movies = "[{}]";

  fs.readFile(__dirname + "/../data/movieList.json", "utf8", function(err, data) {
    if (err) {
      throw err;
    } else {
      movies = JSON.parse(data);
      //console.log('title '+ movies[0].title);
      callBack(movies);
    }
  });
}

//Export functions
// module.exports = { getMovies: movies };
module.exports = getMovies;
