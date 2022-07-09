const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// So now that we've incorporated Body Parser into our project, the next step is to get our app to use it. And Body Parser works with Express, so we can say app.use,and we're going to specify the thing we wanted to use, which is bodyParser.
// Now Body Parser has a few modes,if you will. There is, for example, bodyParser.text, to parse all the requests into text, or bodyParser.json, which is that special format that we saw before, which kind of looks a bit like Javascript objects,
// or the one that we're going to be using is bodyParser.urlencoded, And this is the special one that we use when we're trying to parse data that comes from an HTML form. So whenever you're trying to grab the information that gets posted to your server from an HTML form, you're going to be using urlencoded.
// And in addition to that, we're going to add an option called ‘extended’, and we're going to set it to be ‘true’. And by setting that extended option to true, that basically just allows us to post nested objects. And it's not something that we're going to be using, but it's something that bodyParser is requiring you to explicitly declare.
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    // console.log(__dirname); // prints out the directory name
    // __dirname is basically just a constant that allows us to grab hold of the current file location at any given time, so we can use that location
    // and append the location of another file to it. This means that it doesn't matter if we're on any server, we can simply use directory name and then
    // append whichever file you want to send.
    res.sendFile(__dirname + "/index.html");
});

// without the post method our browser has no way of processing the post requests, so basically we are not accepting anybody to post to our home route
// to fix this, lets add an app.post method to handle any post requests that come to our home route
app.post("/", function (req, res) {
    // in order to tap into the pieces of data inputted by the user, we have to install another NPM package, called body-parser
    // body-parser allows us to parse the information that we get sent from the post requests, so that we can access the properties and variables and hence use them for our calculations
    // So now that we've installed body-parser and it's now inside our package.json as one of our dependencies, we can require it, so that we incorporate that package into our current project.

    // res.send("Thanks for posting");

    // body-parser allows you to go into any of your routes, and you can tap into something called req.body, and this is the parsed version of the HTTP request.
    // If we go ahead and log this, the form data from the input gets logged in the terminal.
    // So the 'body' is everything that we got after we parsed the request.
    // console.log(req.body);
    // So, by using Body Parser, we're able to parse the HTTP request that we get, and by using urlencoded we can get access to the form data, and we can then tap into each of the form data as if they were just properties of the object body.

    // this num1 and num2 that we're getting back from bodyParser,it gets parsed as text.
    // var no1 = req.body.num1;
    // var no2 = req.body.num2;

    // so if we want this to be a number, then we need to explicitly turn this into a number. We do that by simply writing Number, with a capital N, and inside the parentheses we put in the piece of text that we want to turn into a number.
    var no1 = Number(req.body.num1);
    var no2 = Number(req.body.num2);
    var result = no1 + no2;

    res.send("The result of the calculation is " + result);

});

// ************BMI Calculator*****************

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
    var Weight = parseFloat(req.body.weight);
    var Height = parseFloat(req.body.height);
    var bmi = Weight / (Height * Height);
    res.send("Your BMI is " + bmi);
});

// ************BMI Calculator*****************


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});