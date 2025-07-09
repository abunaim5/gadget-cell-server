import { Request, Response } from "express";
import { Router } from "express";
import { db } from "../config/db";
import { ObjectId } from "mongodb";

const router = Router();
const productCollection = db.collection('products');

router.get('/', async (req: Request, res: Response) => {
    try {
        const products = await productCollection.find().toArray();
        res.send(products);
    } catch (err) {
        console.error(err);
    }
});

router.get('/:id', async(req: Request, res: Response) => {
    try{
        const productId = req.params.id;
        const query = {
            _id: new ObjectId(productId)
        };

        const product = await productCollection.findOne(query);
        res.send(product);
    }catch(err) {
        console.error(err);
    }
});

export default router;