import { z } from "zod"

const clientSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    number: z.string(),
    created_at: z.date()
  
})

const clientSchemaRequest =  clientSchema.omit({
    id:true,
    created_at:true
})
const clientSchemaUpdate =  clientSchema.omit({
    id:true
   
}).partial()
export {clientSchema, clientSchemaRequest, clientSchemaUpdate}