const express = require("express");

const bodyParser = require("body-parser");

const app = express();

 that we're going to be using, but it's something that bodyParser is requiring you to explicitly declare.
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  

    var no1 = Number(req.body.num1);
    var no2 = Number(req.body.num2);
    var result = no1 + no2;

    res.send("The result of the calculation is " + result);

});


app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
    var Weight = parseFloat(req.body.weight);
    var Height = parseFloat(req.body.height);
    var bmi = Weight / (Height * Height);
    res.send("Your BMI is " + bmi);
});



app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
