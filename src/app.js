import express from "express";
import { publicApi } from "./routes/publicApi.js";

const app = express();

app.use(express.json());
app.use(publicApi);

export { app };
