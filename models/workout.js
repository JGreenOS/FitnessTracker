//get mongoose
//tell mongoose to use schema (constructor!)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//workout schema here

const WorkoutSchema = new Schema(
    {
//day  - use date default
day: {
    type: Date,
    default: Date.now
},
    
exercises: [{
    //exercise name  - string
    //exercise type - strin
    //exercise time - number of minutes
    //exercise distance - number
    //exercise reps - number
    //exercise sets - numberf
    //exercise weights - number
    name:{
        type: String,
        trim: true,
        required: "Exercise name"
    },
    type:{
        type: String,
        trim: true,
        required: "Exercise type"
    },
    time:{
        type: Number,
        required: "Exercise time in minutes"
    },
    distance:{
        type: Number,
    
    },
    reps:{
        type: Number,
    },
    sets:{
        type: Number,
    },
    weight:{
        type: Number,
    }
}]
    },


{   
    toJSON: {
        virtuals:true}
    }
    
)
    //sum of workouts that have a time
    //sum of workouts that have weights
    //make the workout Class from model and schema

const Workout = mongoose.model("Workout", WorkoutSchema);

    //export the function 
module.exports = Workout;    