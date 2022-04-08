import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
import { userById } from "../controllers/user";

const router = Router();

router.post('/category/:userId', requireSignin, isAuth, isAdmin, create);
router.get('/category', list);
router.get('/category/:id', read);
router.delete('/category/:id/:userId', requireSignin, isAdmin, isAuth, remove);
router.put('/category/:id/:userId', requireSignin, isAdmin, isAuth, update);

router.param('userId', userById);

export default router;