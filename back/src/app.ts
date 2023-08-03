import express, { Application, json, Request, Response } from "express";
import { clientRoutes } from "./routes/client.routers";

const app: Application = express();

app.use(express.json());
app.use("/clients",clientRoutes)

app.get("/",(req, res)=> { return res.json(req.body) })

export default app