import express, { Application, json, Request, Response } from "express";
import { clientRoutes } from "./routes/client.routers";
import { handleAppError } from "./middlewares/handleAppError.middleware";

const app: Application = express();

app.use(express.json());
app.use("/clients",clientRoutes);
app.use(handleAppError)

export default app