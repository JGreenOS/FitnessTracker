
//make Class named Workout and require the modules for models
const Workout = require("..models/workout.js")

//set up app API routes
module.exports = function (app) {

    //get api data on workouts

    //find workout
app.get("/api/workouts", function (req, res) {
Workout.find()
.then(data => {res.json(data)})
.catch(err => {res.json(err)});
});


//update workout
app.post("api/workouts", function (req, res) {
Workout.create( {} )
.then(data => res.json(data))
.catch(err => {res.json(err)})
});

//range of workouts - find
app.get("/api/workouts/range", function (req, res) {

    Workout.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});
//range of workouts - update
app.post("/api/workouts/range", function (req, res) {

    Workout.create ({})    
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});


//attach to an id in database using body parameters
app.put("/api/workouts/:id", ({body, params}, res) =>
Workout.findByIDandUpdate(
    params.id,
    {$push:{exercises:body}},
)
.then(data => res.json(data))
.catch(err => {res.json(err)})
);

}

//need api route for get workout



//api route for post workout


//api route to get range of days for workout 



//api route to post range of workouts



//api route to find and update a workout (resume in progress workout)



