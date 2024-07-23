const Post = require("../model/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });

    const createdPost = await post.save();
    if (!createdPost) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
    res.status(200).json({
      success: true,
      data: createdPost,
      message: "Successfully Created Post",
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const allPost = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      data: allPost,
      message: "Successfully Created Post",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Sever error",
    });
  }
};
