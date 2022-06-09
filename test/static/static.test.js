const app = require("../../staticserver"); // Link to your server file
const supertest = require("supertest");
const fs = require("fs");
const request = supertest(app);

describe("static test", () => {
  it("Gets the test endpoint", (done) => {
    request.get("/").expect(200, (err, res) => {
      expect(res.text.includes("Workssss")).toEqual(true);
      done();
    });
  });
  it("should render about page", (done) => {
    request.get("/about").expect(200, (err, res) => {
      expect(res.text.includes("about page")).toEqual(true);
      done();
    });
  });
});
