const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TableSchema = new Schema({
  _id: {
    type: Number,
    default: Math.round(Math.random() * 10000),
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "",
    required: false,
  },
  box: [],
  createdAt: {
    type: Number,
  },
  updatedAt: {
    type: Number,
  },
});

const tableStorage = mongoose.model("Table", TableSchema);

module.exports = tableStorage;
