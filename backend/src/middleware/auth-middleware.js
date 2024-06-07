import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res
      .status(401)
      .json({
        errors: "Unauthorized",
      })
      .end();
  } else {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
      next();
    } catch (e) {
      res.clearCookie("token");
      res
        .status(401)
        .json({
          errors: "Unauthorized",
        })
        .end();
    }
  }
};

export const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    res
      .status(403)
      .json({
        errors: "Forbidden",
      })
      .end();
  } else {
    next();
  }
};
