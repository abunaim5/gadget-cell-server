import { Request, Response } from "express";
import { Router } from "express";
import { db } from "../config/db";

const router = Router();
const productCollection = db.collection('products');

router.get('/', async (req: Request, res: Response) => {
    try {
        const query = {};
        const options = {
            limit: 8,
            sort: {
                ratings: -1
            }
        };

        const trendingProducts = await productCollection.find(query, options).toArray();
        res.send(trendingProducts);
    } catch (err) {
        console.error(err);
    }
});

export default router;