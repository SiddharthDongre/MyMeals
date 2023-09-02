import mongoose from "mongoose";

// Mongoose Connection
mongoose.connect("mongodb://127.0.0.1:27017/MyMeals", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", () => {
  console.error.bind(console, "Connection error");
});

db.once("open", () => {
  console.log("We are connected");
});

// Mongoose schema, model and document for model collection
const schemaModel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  reEnterPassword: String
});

export const documentModel = mongoose.model("model", schemaModel);

// Mongoose schema, model and document for model collection
const schemaContact = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
});

export const documentContact = mongoose.model("contact", schemaContact);



