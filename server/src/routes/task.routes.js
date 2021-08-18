import { Router } from "express";
import { createTask,getTasks ,deleteTaskById,updateDoneTask} from "../controllers/task.controller";
import { verifyToken } from "../middlwares/auth";
const router = Router();


router.get('/',getTasks)
router.post('/',verifyToken,createTask);
router.post('/:productId',verifyToken,updateDoneTask);
router.delete('/:productId',verifyToken,deleteTaskById);
export default router;