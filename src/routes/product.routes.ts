import { Router } from "express";
import { db } from "../config/db";

const router = Router();
const productCollection = db.collection('products');

router.get('/', async (req, res) => {
    try {
        const products = await productCollection.find().toArray();
        res.send(products);
    } catch (err) {
        console.error(err);
    }
});

export default router;