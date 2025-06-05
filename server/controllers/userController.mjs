import User from "../models/user.model.mjs";

export const registration = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(409)
        .json({ message: "User already exist", success: false });
    }

    let newUser = new User(req.body);
    await newUser.save();

    res
      .status(201)
      .json({ message: "You have registered successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in user creating", success: false });
  }
};

export const login = async (req, res) => {};

export const getAllUsers = async (req, res) => {
  try {
    let user = await User.find({});

    res.status(200).json({
      message: "User fetched successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in getting user data", success: false });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password, age, designation } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    if (name != null && user.name !== name) {
      user.name = name;
    }

    if (password != null && password !== user.password) {
      user.password = password;
    }

    if (age != null && user.age !== age) {
      user.age = age;
    }

    if (designation != null && user.designation !== designation) {
      user.designation = designation;
    }

    await user.save();

    return res.status(200).json({
      message: "Your profile has been updated successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in user update",
      success: false,
    });
  }
};
