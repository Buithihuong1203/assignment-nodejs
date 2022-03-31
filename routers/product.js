import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";

const router = Router();

router.get('/products', list);
router.get('/products/:id', read);
router.post('/products', create);
router.delete('/products/:id', remove);
router.patch('/products/:id', update);

export default router;