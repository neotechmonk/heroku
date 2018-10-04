"use strict";

var _chai = require("chai");

var _chaiArrays = require("chai-arrays");

var _chaiArrays2 = _interopRequireDefault(_chaiArrays);

var _mocha = require("mocha");

var _mocha2 = _interopRequireDefault(_mocha);

var _movie = require("../movie");

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _chai.use)(_chaiArrays2.default);

var moviesResult = null;

//get the first movie as the sample test with
var movieResult = null;

function resetResults() {
  moviesResult = movieResult = null;
}
describe("Movie", function () {
  describe("App-getMOvies", function () {
    it("Movies object shouldnt be null", function (done) {
      (0, _movie2.default)(function (moviesResult) {
        _chai.assert.isNotNull(moviesResult);
        done();
      });
    });

    it("Movies should be an array", function (done) {
      (0, _movie2.default)(function (moviesResult) {
        (0, _chai.expect)(moviesResult).to.be.array();
        done();
      });
    });

    it("Movies arrays should have atleast one  movie exists in the datasource", function (done) {
      (0, _movie2.default)(function (moviesResult) {
        (0, _chai.expect)(moviesResult).not.to.be.ofSize(0);
        done();
      });
    });

    it("movie has key properties if at least one movie exists in the datasource", function (done) {
      (0, _movie2.default)(function (moviesResult) {
        movieResult = moviesResult[0];
        _chai.assert.property(movieResult, "title", "movie doesnt have a title property");
        _chai.assert.property(movieResult, "id", "movie doesnt have an id property");
        _chai.assert.property(movieResult, "sessions", "movie doesnt have the sessions property");
        // this doesnt work chai.assert.deepProperty(movieResult, "sessions.location");
        done();
      });
    });
  });
});
//# sourceMappingURL=movieTest.js.map