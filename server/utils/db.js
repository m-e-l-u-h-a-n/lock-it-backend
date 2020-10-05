import mongoose from "mongoose";

const options =  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  useCreateIndex: true,
},

export const connect = async (url) => {
  try{
    await mongoose.connect(url, options);
    console.log("Safely connected to the database");
  } catch(err) {
    console.error(err);
    process.exit(1);
  }
};