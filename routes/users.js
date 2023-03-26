import express from "express";
import auth from "../middleware/auth.js";
import { login, signup } from "../controllers/auth.js";
import { getAllUsers, updateProfile } from "../controllers/users.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

export default router;


