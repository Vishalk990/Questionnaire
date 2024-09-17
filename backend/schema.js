const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    employeeId: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    improvementAreas: [String],
    question2: String,
    question2Explanation: String,
    question3: String,
    question3Explanation: String,
    rating1: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    rating2: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    rating3: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
  }, { timestamps: true });

const Form = mongoose.model("exitform", formSchema);

module.exports = Form;