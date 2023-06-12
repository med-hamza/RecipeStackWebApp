const mongoose = require("mongoose")

const activityShema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    duration: {
        type:Number
    },
    calories: {
        type: Number
    }
})

module.exports = mongoose.model("activity",activityShema );