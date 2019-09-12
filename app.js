//API Key: &apikey=thewdb

const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");

app.get("/results", function (req, res) {
    request(
        "http://www.omdbapi.com/?apikey=thewdb&s=iowa",
        (error, response, body) => {
            if (!error && response.statusCode == 200) {
                let parsedData = JSON.parse(body);
                // res.send(parsedData["Search"][0]["Title"]);
                res.render("results", {
                    movieData: parsedData
                });
            }
        }
    );
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});