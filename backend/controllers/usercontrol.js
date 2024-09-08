import User from "../models/usermodel.js";

 const getUserSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const selectedUser = await User.find({ _id: { $ne: loggedInUser } }).select("-password");
    res.status(200).json(selectedUser);
  } catch (error) {
    console.log("Error i(n getting user for sidebar:",error.message);
    res.status(500).json({error:"Internal server error"});
  }
};
export default getUserSidebar;
