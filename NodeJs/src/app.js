import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import routerProducts from "./routes/products.js";
//config
const app = express();
const API_DB = process.env.API_DB;
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api", routerProducts)
// router
app.use("/api", router);

// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;
