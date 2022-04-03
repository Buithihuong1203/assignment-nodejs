import express from "express";
import cors from 'cors';
import morgan from "morgan";
import mongoose from "mongoose";

import productRoute from "../routers/product";
import authRoute from "../routers/auth";
import postRoute from "../routers/post";
import categoryRoute from "../routers/category";


const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api", productRoute);
app.use("/api", authRoute);
app.use("/api", postRoute);
app.use("/api", categoryRoute);

mongoose.connect('mongodb://localhost:27017/demo-nodejs')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));

const PORT = 3003;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})