import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth'

const router = Router();

router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/products/:userId', requireSignin, isAdmin, isAuth, create);
router.delete('/products/:id/:userId', checkAuth, requireSignin, isAuth, isAdmin, remove);
router.put('/products/:id/:userId', checkAuth, requireSignin, isAuth, isAdmin, update);
//router.put('/products/:userId', checkAuth, isAuth, getUser);
//router.post('/search', search);


router.param("userId", userById);

export default router;