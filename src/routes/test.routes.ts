import { getApi } from "../controllers/test";
import { Router } from "express";

const testRouter = Router();

testRouter.get("/get", getApi);

export default testRouter;

