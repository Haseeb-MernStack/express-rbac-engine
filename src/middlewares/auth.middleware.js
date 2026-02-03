export const protect = async (req, res, next) => {
  // Simulated logged-in user
  req.user = {
    id: "123",
    roleId: req.headers["role-id"]
  };

  if (!req.user.roleId)
    return res.status(401).json({ message: "Unauthorized" });

  next();
};
