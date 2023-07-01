import express from "express";
import { getUser, signin, signup } from "../controller/user";
import { getIdAdmin, signinAdmin, signupAdmin } from "../controller/admin";

const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", getUser);
router.post("/admin/signin", signinAdmin);
router.post("/admin/signup", signupAdmin);
router.get("/admin/:id", getIdAdmin);
export default router;
