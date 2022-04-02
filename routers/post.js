import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/post";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.get('/posts', checkAuth, list);
router.get('/posts/:id', checkAuth, read);
router.post('/posts', checkAuth, create);
router.delete('/posts/:id', checkAuth, remove);
router.put('/posts/:id', checkAuth, update);
export default router;