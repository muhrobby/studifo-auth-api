import express from "express";
import { publicApi } from "./routes/publicApi.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(publicApi);

export { app };
