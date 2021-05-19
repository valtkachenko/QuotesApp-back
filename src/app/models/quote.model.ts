import mongoose from "mongoose";

const schema = new mongoose.Schema({
  author: String,
  text: String,
});

const QuoteModel = mongoose.model("Quote", schema, "quotes");

export default QuoteModel;
