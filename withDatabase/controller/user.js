const User = require("./../model/userModel");
exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: {
        user: user
      }
    });
  } catch (error) {
    res.status(400).json({ status: "fail", data: { message: error } });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users
      }
    });
  } catch (error) {
    res.status(404).json({ status: "fail", error });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (error) {
    res.status(404).json({ status: "fail", error });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "data updated",
      data: {
        user
      }
    });
  } catch (error) {
    res.status(404).json({ status: "fail", error });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success"
    });
  } catch (error) {
    res.status(404).json({ status: "fail", error });
  }
};
