import mongoose, { mongo } from "mongoose";


async function connectOnDB() {
  mongoose.connect(process.env.DATA_BASE_URL);
  return mongoose.connection;
};

export default connectOnDB; 