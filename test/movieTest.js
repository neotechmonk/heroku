var chai = require("chai");
var assertArrays = require("chai-arrays");
var mocha = require("mocha");
var getMovies = require("../movie");

chai.use(assertArrays);

var moviesResult = null;

//get the first movie as the sample test with
var movieResult = null;

if (moviesResult != null && moviesResult.length > 0) {
  movieResult = moviesResult[0];
  console.log("length of " + moviesResult.length);
}

getMovies(function(moviesResult) {
  console.log("in callback");

  if (moviesResult != null && moviesResult.length > 0) {
    movieResult = moviesResult[0];
    console.log("length of " + moviesResult.length);
  }

  describe("Movie", function() {
    console.log("in first describe");

    describe("App-getMOvies", function() {
      //Movies object shouldnt be null
      it("Movies object shouldnt be null", function() {
        chai.assert.isNotNull(moviesResult);
      });
      //Movies object shouldnt be null
      it("Movies should be an array", function() {
        chai.expect(moviesResult).to.be.array();
      });
      //Movies object should have at least one movie if source had movies
      it("Movies arrays should have at least one movie when the datasource has movies", function() {
        chai.expect(moviesResult).not.to.be.ofSize(0);
        //chai.expect([{},{}]).not.to.be.ofSize(2);
      });

      //check the sample movie has a property called title
      it("movie has a property called title", function() {
        chai.assert.property(movieResult, "title");
        //chai.expect([{},{}]).not.to.be.ofSize(2);
      });
    });
  });
});
