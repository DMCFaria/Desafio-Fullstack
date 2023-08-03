import { z } from "zod"

const clientSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    number: z.string(),
  
})

const clientSchemaRequest =  clientSchema.omit({
    id:true,
   
})
export {clientSchema, clientSchemaRequest}