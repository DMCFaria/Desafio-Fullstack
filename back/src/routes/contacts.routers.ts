import { Router } from "express";
import { createContactsController, deleteContactsController, listContactsController, updateContactsController } from "../controllers/contacts.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { contactsSchemaRequest, contactsSchemaUpdate } from "../schemas/contacts.schemas";

const contactRoutes = Router()
contactRoutes.post("", ensureDataIsValid(contactsSchemaRequest), createContactsController)
contactRoutes.get("", listContactsController)
contactRoutes.delete("/:id", deleteContactsController)
contactRoutes.patch("/:id", ensureDataIsValid(contactsSchemaUpdate), updateContactsController)
export { contactRoutes }