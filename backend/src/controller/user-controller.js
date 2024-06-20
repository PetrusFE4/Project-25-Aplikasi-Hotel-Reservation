import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    res.status(201).json({
      message: "Register successfully",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.cookie("token", result, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.status(200).json({
      message: "Login successfully",
      data: {
        token: result,
      },
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "Logout successfully",
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const email = req.user.email;
    const result = await userService.get(email);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    res.clearCookie("token");
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const currentEmail = req.user.email;
    const data = req.body;
    const result = await userService.update(currentEmail, data);
    res.clearCookie("token");
    res.cookie("token", result.newToken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.status(200).json({
      message: "Update successfully",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await userService.getAllUsers();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { register, login, get, logout, update, getAllUsers };
