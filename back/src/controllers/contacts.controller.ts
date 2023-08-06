import { Request, Response } from "express"
import { TContactsRequest, TContacts} from "../interfaces/contacts.interface"
import { createContactsService } from "../services/Contacts.Services/createContacts.Service"
import { listContactsService } from "../services/Contacts.Services/listContacts.Service"
import { deleteContactsService } from "../services/Contacts.Services/deleteContacts.Service"
import { updateContactsService } from "../services/Contacts.Services/updateContacts.Service"

const createContactsController = async (req:Request, res:Response)=>{
    const newContacts = await createContactsService(req.body)
    return res.status(201).json(newContacts)
}
const listContactsController = async (req:Request, res:Response)=>{
    const listContacts = await listContactsService()
    return res.status(200).json(listContacts)
}
const deleteContactsController =  async (req:Request, res:Response)=>{
    await deleteContactsService(req.params.id)
    return res.status(204).send()
}
const updateContactsController = async (req:Request, res:Response)=>{
    const updateContacts =  await updateContactsService(req.body, req.params.id)
    return res.json(updateContacts)

}
export {createContactsController, listContactsController, deleteContactsController, updateContactsController}