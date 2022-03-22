import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";

const router = Router();

router.get('/products', list);
router.get('/product/:id', read);
router.post('/products', create);
router.delete('/product/:id', remove);
router.patch('/product/:id', update);

export default router;