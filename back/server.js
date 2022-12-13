var express = require("express");
var app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

const postSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

const Post = mongoose.model("Post", postSchema);

app.post("/create", (req, res) => {
  Post.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
app.get("/read", (req, res) => {
  Post.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});
app.listen(3001, function () {
  console.log("running !");
});
