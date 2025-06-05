import User from "../models/user.model.mjs";

export const registration = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(409)
        .json({ message: "User already exist", success: false });
    }

    let newUser = new User(req.body)
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

    res
      .status(200)
      .json({
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
    let { name, email, password, age, designation } = req.body;
    let user = User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "user not found", success: false });
    }

    if (name !== undefined && user.name !== name) {
      user.name = name;
    }
    if (password !== undefined && password !== user.password) {
      user.password = password;
    }
    if (age !== undefined && age !== user.age) {
      user.age = age;
    }
    if (designation !== undefined && designation !== user.designation) {
      user.designation = designation;
    }

    await user.save();

    res
      .status(200)
      .json({
        message: "Your profile has updated successfully",
        success: true,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error in user updation", success: false });
  }
};
