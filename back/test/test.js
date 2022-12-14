const { expect } = require("chai");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

describe("User", () => {
  describe("Connection", () => {
    it("should connect to MongoDB", (done) => {
      mongoose.connect(
        process.env.MONGO_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err, result) => {
          if (err) {
          } else {
            result = "Connected";
          }

          expect(err).to.be.eql(null);
          expect(result).to.be.deep.eql("Connected");
        }
      );

      done();
    });
  });

  describe("API test", () => {
    const postSchema = mongoose.Schema({
      firstName: String,
      lastName: String,
    });

    const Post = mongoose.model("Post", postSchema);

    it("Should create user in db", (done) => {
      Post.create(
        {
          _id: "6398dc3d552220989042fb79",
          firstName: "TESTDEVOP",
          lastName: "testdevop",
        },
        (err, result) => {
          expect(result).to.not.be.eql(null);
          expect(err).to.be.eql(null);
        }
      );
      done();
    });

    it("Should read", (done) => {
      Post.findById("6398dc3d552220989042fb79".toString(), (err, result) => {
        expect(result).to.not.be.eql(null);
        expect(err).to.be.eql(null);
      });
      done();
    });

    it("should delete", (done) => {
      Post.findByIdAndDelete(
        { _id: "6398dc3d552220989042fb79" },
        (err, result) => {
          if (err) result = "error";
          else result = "no error";
          expect(result).to.be.deep.eql("no error");
        }
      );

      done();
    });
  });
});
