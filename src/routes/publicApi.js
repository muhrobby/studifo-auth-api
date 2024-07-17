import { Router } from "express";
import { hello } from "../controllers/helloController.js";

const publicApi = Router();

publicApi.get("/", hello);

export { publicApi };
