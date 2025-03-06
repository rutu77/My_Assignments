import express from "express";

import { managerController } from "../controllers/ManagerController";

const router = express.Router();



router.get("/pending", managerController.abc);
router.put("/:leaveid/approve", managerController.approveLeave);
router.put("/:leaveid/reject", managerController.rejectLeave);


export const managerRoute = router;