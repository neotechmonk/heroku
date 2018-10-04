"use strict";

var chai = require("chai");
var assertArrays = require("chai-arrays");
var mocha = require("mocha");
var getMovies = require("../movie");

chai.use(assertArrays);

var moviesResult = null;

//get the first movie as the sample test with
var movieResult = null;

function resetResults() {
  moviesResult = movieResult = null;
}
describe("Movie", function () {
  describe("App-getMOvies", function () {
    it("Movies object shouldnt be null", function (done) {
      getMovies(function (moviesResult) {
        chai.assert.isNotNull(moviesResult);
        done();
      });
    });

    it("Movies should be an array", function (done) {
      getMovies(function (moviesResult) {
        chai.expect(moviesResult).to.be.array();
        done();
      });
    });

    it("Movies arrays should have atleast one  movie exists in the datasource", function (done) {
      getMovies(function (moviesResult) {
        chai.expect(moviesResult).not.to.be.ofSize(0);
        done();
      });
    });

    it("movie has key properties if at least one movie exists in the datasource", function (done) {
      getMovies(function (moviesResult) {
        movieResult = moviesResult[0];
        chai.assert.property(movieResult, "title", "movie doesnt have a title property");
        chai.assert.property(movieResult, "id", "movie doesnt have an id property");
        chai.assert.property(movieResult, "sessions", "movie doesnt have the sessions property");
        // this doesnt work chai.assert.deepProperty(movieResult, "sessions.location");

        done();
      });
    });
  });
});
//# sourceMappingURL=movieTest.js.map