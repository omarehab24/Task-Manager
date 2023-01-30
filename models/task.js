const mongoose = require("mongoose");
// Set up the structure for future documents
const TaskSchema = new mongoose.Schema({
  // name:String,
  // completed:Boolean,
  name: {
    type: String,
    // Validators
    required: true,
    trim: true,
    maxLength: [20, "name can not be more than 20 characters long"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
