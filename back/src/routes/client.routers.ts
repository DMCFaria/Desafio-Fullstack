import { Router } from "express";
import { createClientController, deleteClientController, listClientController, updateClientController } from "../controllers/client.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchemaRequest, clientSchemaUpdate } from "../schemas/client.schemas";
import { listClientService } from "../services/Clients.Services/listClient.Service";

const clientRoutes = Router()
clientRoutes.post("", ensureDataIsValid(clientSchemaRequest), createClientController)
clientRoutes.get("", listClientController)
clientRoutes.delete("/:id", deleteClientController)
clientRoutes.patch("/:id", ensureDataIsValid(clientSchemaUpdate), updateClientController)
export { clientRoutes }