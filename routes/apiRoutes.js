
//make Class named Workout and require the modules for models
const db = require("../models");
const router = require("express").Router();

//set up app API routes
//module.exports = function (app) {

    //get api data on workouts

    //find workout
router.get("/api/workouts", (req, res) => {
db.Workout.find({})
.then((dbworkout) => {res.json(dbworkout);})
.catch((err) => {res.status(400).json(err);
});
})

//add new workout
router.post("api/workouts", ({body}, res) => {
    Workout.create(body)
    .then((dbWorkout) => { res.json(dbWorkout)})
    .catch((err) => {res.status(400).json(err)})
})

//update workout
router.post("api/workouts", (req, res) => {
db.Workout.create({})
.then((dbworkout) => {res.json(dbworkout);})
.catch((err) => {res.status(400).json(err);
});
})

//range of workouts - find
router.get("/api/workouts/range", function (req, res) {

    Workout.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})
//range of workouts - update
router.post("/api/workouts/range", function (req, res) {

    Db.create ({})    
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})


//attach to an id in database using body parameters
router.put("/api/workouts/:id", (req, res) => {
db.Workout.findOneandUpdate(
    { _id: req.params.id},
    {$push:{exercises:req.body}},
)
.then(workout => res.json(workout))
.catch(err => {res.json(err);
});


})

//need api route for get workout



//api route for post workout


//api route to get range of days for workout 



//api route to post range of workouts



//api route to find and update a workout (resume in progress workout)

