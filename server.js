//get node modules for express and mongoose
const express = require('express');
const mongoose = require('mongoose')

require('./seeders/seed');
//use express
const app = express();
const PORT = process.env.PORT || 3000;

//use port env variable

//app.use for express stuff
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

//database call / definition
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false})
//define routes call for api and html routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));
//listen for port 

app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
});

// db.once('open', function () {
    // console.log('Connected to MongoDB')
// });