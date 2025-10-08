import express from "express";
import { createUser, getUsers } from "../controllers/userController";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);

export default router;
