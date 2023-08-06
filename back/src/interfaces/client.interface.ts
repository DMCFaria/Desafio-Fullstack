import { z } from "zod"
import { clientSchema, clientSchemaRequest } from "../schemas/client.schemas"
import { DeepPartial } from "typeorm"

type Tclient = z.infer<typeof clientSchema>
type TclientRequest = z.infer<typeof clientSchemaRequest>
type TclientUpdate = DeepPartial<TclientRequest>

export { Tclient, TclientRequest, TclientUpdate }