const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    // Options to hide the deprecation warnings in mongoose v5.x.x (These options are not required for mongoose v6)
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB;
