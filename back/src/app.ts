import express, { Application, json, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/",(req, res)=> { return res.json(req.body) })

export default app