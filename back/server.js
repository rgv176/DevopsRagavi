var express = require("express");
var app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
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

app.delete("/delete/:id", (req, res) => {
  Post.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.listen(process.env.port || 3001, function () {
  res.send("Hello !");
  console.log("running !");
});
