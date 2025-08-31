import { Router } from "express";
import globalRouter from "./global";
import missionRouter from "./missionPage";



const router = Router();

router.use(globalRouter);
router.use(missionRouter);



export default router;