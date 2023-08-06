import { z } from "zod"
import { contactsSchema, contactsSchemaRequest } from "../schemas/contacts.schemas"
import { DeepPartial } from "typeorm"

type TContacts = z.infer<typeof contactsSchema>
type TContactsRequest = z.infer<typeof contactsSchemaRequest>
type TContactsUpdate = DeepPartial<TContactsRequest>

export { TContacts, TContactsRequest, TContactsUpdate }