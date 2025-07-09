import { Request, Response } from "express";
import { Router } from "express";
import { db } from "../config/db";
// import { ObjectId } from "mongodb";

const router = Router();
const cartCollection = db.collection('cart');

type CartProductListType = {
    productId: string;
    name: string;
    brand: string;
    image: string;
    description: string;
    price: number;
    old_price: number;
    category: string;
    ratings: number;
    createdAt: string;
}

router.get('/', async (req: Request, res: Response) => {
    try {
        const cartProducts = await cartCollection.find().toArray();
        res.send(cartProducts);
    } catch (err) {
        console.error(err);
    }
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const cartProduct: CartProductListType = req.body;
        const query = {
            productId: cartProduct.productId
        };
        const existingProduct = await cartCollection.findOne(query);
        if (existingProduct) {
            res.status(400).json({ message: 'Product already exist' });
            return;
        };
        const result = await cartCollection.insertOne(cartProduct);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;