import express from "express";
import { Router } from "express";
import { getAllUsers } from "../controllers/adminController.js";

const adminRouter = express.Router();
adminRouter.route('/users', getAllUsers);
adminRouter.route('/contacts',)

export default adminRouter;