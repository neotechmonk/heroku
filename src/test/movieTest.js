import { use, assert, expect } from "chai";
import assertArrays from "chai-arrays";
import mocha from "mocha";
import getMovies from "../movie";

use(assertArrays);

var moviesResult = null;

//get the first movie as the sample test with
var movieResult = null;

function resetResults() {
  moviesResult = movieResult = null;
}
describe("Movie", () => {
  describe("App-getMOvies", () => {
    it("Movies object shouldnt be null", done => {
      getMovies(moviesResult => {
        assert.isNotNull(moviesResult);
        done();
      });
    });

    it("Movies should be an array", (done)=>  {
      getMovies((moviesResult)=>  {
        expect(moviesResult).to.be.array();
        done();
      });
    });

    it("Movies arrays should have atleast one  movie exists in the datasource", (done)=>  {
      getMovies((moviesResult)=>  {
        expect(moviesResult).not.to.be.ofSize(0);
        done();
      });
    });

    it("movie has key properties if at least one movie exists in the datasource", (done) => {
      getMovies((moviesResult)=>  {
        movieResult = moviesResult[0];
        assert.property(
          movieResult,
          "title",
          "movie doesnt have a title property"
        );
        assert.property(movieResult, "id", "movie doesnt have an id property");
        assert.property(
          movieResult,
          "sessions",
          "movie doesnt have the sessions property"
        );
        // this doesnt work chai.assert.deepProperty(movieResult, "sessions.location");
        done();
      });
    });
  });
});
