// model import
const Comment = require("../model/commentModel");
const Post = require("../model/postModel");

exports.createComment = async (req, res) => {
  try {
    // fetch data from req ki body
    const { post, user, body } = req.body;

    // new object bna lete hai comment ka
    const comment = new Comment({
      post,
      user,
      body,
    });

    // db main save kr lete hai

    const createdComment = await comment.save();

    //   ab actual post ko bhi update krna hai

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: createdComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      message: "comment create Succesfully",
      data: updatedPost,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Sever error",
    });
  }
};
