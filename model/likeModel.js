const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
