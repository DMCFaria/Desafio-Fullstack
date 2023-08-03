import { z } from "zod"
import { clientSchema, clientSchemaRequest } from "../schemas/client.schemas"

type Tclient = z.infer<typeof clientSchema>
type TclientRequest = z.infer<typeof clientSchemaRequest>

export { Tclient, TclientRequest }