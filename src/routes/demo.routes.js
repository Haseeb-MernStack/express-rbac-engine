import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { can } from "../middlewares/rbac.middleware.js";
import { createUser, deleteUser } from "../controllers/demo.controller.js";

const router = express.Router();

router.post("/users", protect, can("user:create"), createUser);
router.delete("/users", protect, can("user:delete"), deleteUser);

export default router;
