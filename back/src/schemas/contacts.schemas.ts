import { z } from "zod"

const contactsSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    number: z.string(),
    created_at: z.date(),
    client_id: z.string(),
    client:z.any()
})

const contactsSchemaRequest =  contactsSchema.omit({
    id:true,
    created_at:true,
    client:true

})
const contactsSchemaUpdate =  contactsSchema.omit({
    id:true
   
}).partial()
export {contactsSchema, contactsSchemaRequest, contactsSchemaUpdate}