import express from "express";
import { leaveController } from "../controllers/LeaveController";

const router = express.Router();

router.post("/", leaveController.applyLeave);

router.get("/:employeeId", leaveController.getLeaveHistory);

// router.get("/report", leaveController.getLeaveReport);


export const leaveRoute = router;