const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name: String,
    employeeId: String,
    designation: String,
    department: String,
    improvementAreas: [String],
    question2: String,
    question2Explanation: String,
    question3: String,
    question3Explanation: String,
    rating1: Number,
    rating2: Number,
    rating3: Number,
  }, { timestamps: true });

const Form = mongoose.model("exitform",formSchema);

module.exports = Form;