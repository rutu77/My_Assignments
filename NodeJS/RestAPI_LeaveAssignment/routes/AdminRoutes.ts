import express from "express";
import { adminController } from "../controllers/AdminController";

const router = express.Router();


router.get("/report", adminController.getLeaveReport);


export const adminRoute = router;