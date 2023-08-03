import { Router } from "express";
import { createClientController } from "../controllers/client.controller";

const clientRoutes = Router()
clientRoutes.post("",createClientController)
export {clientRoutes}