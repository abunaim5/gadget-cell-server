import { connectDB } from "./config/db";
import { Request, Response } from "express";
import productRoutes from './routes/product.routes'
import trendingRoutes from './routes/trending.routes'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

app.use('/products', productRoutes);
app.use('/trending', trendingRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('GadgetCell server is running.');
});

app.listen(port, async () => {
    await connectDB();
    console.log(`GadgetCell server is running on PORT ${port}`);
});