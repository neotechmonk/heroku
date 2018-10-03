var fs = require("fs");

//Return all movies as array of Movie objects
function getMovies(callBack) {
  let movies = "[{}]";

  fs.readFile(__dirname+"/movieList.json", "utf8", function(err, data) {
    if (err) {
      throw err;
    } else {
      movies = JSON.parse(data);
      callBack(movies);
    }
  });
}

//Export functions
// module.exports = { getMovies: movies };
module.exports = getMovies;
