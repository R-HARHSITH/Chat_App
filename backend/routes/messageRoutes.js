import express from "express";
import { getMessage,sendMessage } from "../controllers/messagecontrol.js";
import protectRoute from "../middleware/protectRoute.js";

const router=express.Router();

router.get("/:id",protectRoute,getMessage); 
router.post("/send/:id",protectRoute,sendMessage); 
//protect route is for authorizing whether the 
// user has login or not into website if not then this page or route
//  is not allowed else he can access and utilize the resources.

export default router;