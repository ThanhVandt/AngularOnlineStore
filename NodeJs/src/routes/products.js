import express from "express";
import { deleteProduct, getAll, getProducts, postProducts } from "../controller/products";
const router = express.Router();
router.get("/products", getAll);
router.get("/products/:id", getProducts);
router.post("/products", postProducts);
router.delete("/products/:id", deleteProduct);
export default router;
