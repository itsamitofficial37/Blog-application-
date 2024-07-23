const Like = require("../model/likeModel");
const Post = require("../model/postModel");

exports.likePost = async (req, res) => {
  try {
    // fetch post , user from request ki body se
    const { post, user } = req.body;

    //   create new object of like
    const like = new Like({
      post,
      user,
    });

    // db main save kr dete hai

    const savedLike = await like.save();

    //  update post collection

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes") //populate the comment array with comment documents
      .exec();

    res.status(200).json({
      success: true,
      message: " Like post  Succesfully",
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

exports.unlike = async (req, res) => {
  try {
    const { post, like } = req.body;
    const unlikedPost = await Like.findOneAndDelete({ post: post, _id: like });

    const updatedPost = await Post.findByIdAndUpdate(
        post,
        { $pull: { likes: deletedLike._id } },
        { new: true }
      );
  
      res.json({
        post: updatedPost,
      });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Sever error",
    });
  }
};
