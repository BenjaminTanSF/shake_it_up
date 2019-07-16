const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const drinks = require('./routes/api/drinks');
const ingredients = require('./routes/api/ingredients');
const drink_search = require('./routes/api/drink_search');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));

app.use("/api/drinks", drinks);
app.use("/api/ingredients", ingredients);
app.use("/api/drink_search", drink_search);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));