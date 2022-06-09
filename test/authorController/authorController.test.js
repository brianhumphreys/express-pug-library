const {
  author_create_post,
  author_create_get,
} = require("../../controllers/authorController");
const Author = require("../../models/author");
const db = require("../db");
const { testExpressValidatorMiddleware } = require("../validator");

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

describe("Author", () => {
  describe("create", () => {
    it("creates a new author given validations pass", async () => {
      const req = {
        body: {
          first_name: "First",
          last_name: "LastName",
          date_of_birth: "1990-01-01",
        },
      };
      const res = {
        redirect: jest.fn(),
        render: jest.fn(),
      };
      const middlewareArray = author_create_post.slice(
        0,
        author_create_post.length - 1,
      );
      const handler = author_create_post[author_create_post.length - 1];
      await testExpressValidatorMiddleware(req, res, middlewareArray);

      handler(req, res, middlewareArray);

      await new Promise((resolve) => setTimeout(resolve, 250));
      expect(res.redirect).toHaveBeenCalled();
      expect(res.render).not.toHaveBeenCalled();
      const url = res.redirect.mock.calls[0][0].split("/");
      const id = url[url.length - 1];
      const actual = await Author.findById(id);
      expect(actual.first_name).toStrictEqual(req.body.first_name);
      expect(actual.last_name).toStrictEqual(req.body.last_name);
      expect(actual.date_of_birth).toStrictEqual(req.body.date_of_birth);
    });

    it("should fail validation for first_name", async () => {
      const req = {
        body: {
          first_name: "First Name",
          last_name: "LastName",
          date_of_birth: "1990-01-01",
        },
      };
      const res = {
        redirect: jest.fn(),
        render: jest.fn(),
      };
      const middlewareArray = author_create_post.slice(
        0,
        author_create_post.length - 1,
      );
      const handler = author_create_post[author_create_post.length - 1];
      await testExpressValidatorMiddleware(req, res, middlewareArray);

      handler(req, res, middlewareArray);

      await new Promise((resolve) => setTimeout(resolve, 250));
      expect(res.redirect).not.toHaveBeenCalled();
      expect(res.render).toHaveBeenCalledWith("author_form", {
        title: "Create Author",
        author: req.body,
        errors: [
          {
            location: "body",
            msg: "First name has non-alphanumeric characters.",
            param: "first_name",
            value: "First Name",
          },
        ],
      });
    });

    it("should render create form", () => {
      const res = {
        render: jest.fn(),
      };

      author_create_get({}, res);

      expect(res.render).toHaveBeenCalledWith("author_form", {
        title: "Create Author",
      });
    });
  });
});
