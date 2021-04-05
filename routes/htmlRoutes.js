//use paths to get to files

const path = require("path");
//define the app and the html routes for the pages - index, exercise and stats
module.exports = function (app) {
    //routes are in alphabetical order for ease of definition
//route to exercise page
    app.get("/exercise", function (req, res)
{
res.sendFile(path.join(__dirname, "../public/exercise.html"));

});
//route to index page
app.get("/", function (req, res)
{
res.sendFile(path.joing(__dirname, "../public/index.html"));

});

//route to stats page
app.get("/stats", function (req, res) {
res.sendFile(path.join(__dirname, "../public/stats.html"));

});
}




