
//make Class named Workout and require the modules for models
const db = require("../models");
const router = require("express").Router();

//get api data on workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        { $addFields: {totalDuration: { $sum: '$exercises.duration' } } }
    ])
    .sort( {date: -1} )
    .then (dbWorkout => {res.json(dbWorkout) })
    .catch((err) => {res.json(err)});
})


//find workout
router.get("/api/workouts", (req, res) => {
db.Workout.find({})
.then((dbworkout) => {res.json(dbworkout);})
.catch((err) => {res.status(400).json(err);
});
})

//add new workout
router.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then((dbWorkout) => { res.json(dbWorkout)})
    .catch((err) => {res.status(400).json(err)})
})


//range of workouts - find
router.get("/api/workouts/range", function (req, res) {
    db.Workout.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

//range of workouts - update
router.post("/api/workouts/range", function (req, res) {
    db.Workout.create ({})    
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})


//attach to an id in database using body parameters
router.put("/api/workouts/:id", (req, res) => {
db.Workout.findByIdAndUpdate(
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



//api route to post range of workouts with last 7 days
router.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([{
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" } }
    }])
    .limit(7)
    .sort({ _id: -1})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);})
    
    })
//api route to find and update a workout (resume in progress workout)

module.exports = router;