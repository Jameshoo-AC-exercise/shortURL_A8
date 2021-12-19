const mongoose = require("mongoose")
const Schema = mongoose.Schema

const urlSchema = new Schema({
  originalURL: { type: String, required: true },
  shortURL: { type: String, required: true },
})

module.exports = mongoose.model("urlSchema", urlSchema) // ("model name in mongoDB", new Schema())
