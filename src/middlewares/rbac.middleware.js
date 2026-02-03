import Role from "../models/role.model.js";

export const can = (permission) => {
  return async (req, res, next) => {
    const role = await Role.findById(req.user.roleId);
    if (!role || !role.permissions.includes(permission))
      return res.status(403).json({ message: "Forbidden" });

    next();
  };
};
