require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var engine = require("ejs-locals");
var app = express();
var contactRouter = require("./routes/contact");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("ejs", engine);
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/contact", contactRouter);

app.listen(3000, function() {
    console.log("http://localhost:3000");
});
