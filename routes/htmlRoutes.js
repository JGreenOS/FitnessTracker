
//use paths to get to files
const router = require("express").Router();
const path = require("path");
//define the app and the html routes for the pages - index, exercise and stats

    //routes are in alphabetical order for ease of definition
//route to exercise page
router.get("/exercise", function (req, res)
{
res.sendFile(path.join(__dirname, "../public/exercise.html"));

});
//route to index page
router.get("/", function (req, res)
{
res.sendFile(path.join(__dirname, "../public/index.html"));

});

//route to stats page
router.get("/stats", function (req, res) {
res.sendFile(path.join(__dirname, "../public/stats.html"));

});
module.export = router;


module.exports = router;


// html route to exercise type


//html route to main page


