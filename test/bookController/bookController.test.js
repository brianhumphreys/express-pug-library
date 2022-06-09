const {
  book_create_post,
  book_create_get,
} = require("../../controllers/bookController");
const Book = require("../../models/book");
const db = require("../db");
const { testExpressValidatorMiddleware } = require("../validator");

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

describe("Book", () => {
  describe("updateBook", () => {});
});
