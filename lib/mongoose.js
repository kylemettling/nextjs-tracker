import mongoose from "mongoose";

const isDev = process.env.NODE_END !== "production";
const url = isDev ? process.env.MONGO_URL : process.env.NEXT_PUBLIC_MONGO_URL;
const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(url, {
      useNewUrlParser: true,
    });
    console.log(url);
  }
  return handler(req, res);
};

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to mongo");
});

export default connectDb;
