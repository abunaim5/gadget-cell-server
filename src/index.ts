import { connectDB } from "./config/db";
import { Request, Response } from "express";
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('GadgetCell server is running.');
});

app.listen(port, async () => {
    await connectDB();
    console.log(`GadgetCell server is running on PORT ${port}`);
});