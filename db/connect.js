import mongoose from 'mongoose'

// const connectDB = (url) => {
//   return mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true})
// }
const MONGO_URL = process.env.MONGO_URL;

const connectDB = () => {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongoose Connected");
  });
}

// module.exports = connectDatabase;
// const mongoose = require('mongoose');
export default connectDB