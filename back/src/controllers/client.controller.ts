import { Request, Response } from "express"
import { TclientRequest, Tclient} from "../interfaces/client.interface"
import { createClientService } from "../services/Clients.Services/createClient.Service"
import { listClientService } from "../services/Clients.Services/listClient.Service"
import { deleteClientService } from "../services/Clients.Services/deleteClient.Service"
import { updateClientService } from "../services/Clients.Services/updateClient.Service"

const createClientController = async (req:Request, res:Response)=>{
    const newClient = await createClientService(req.body)
    return res.status(201).json(newClient)
}
const listClientController = async (req:Request, res:Response)=>{
    const listClient = await listClientService()
    return res.status(200).json(listClient)
}
const deleteClientController =  async (req:Request, res:Response)=>{
    await deleteClientService(req.params.id)
    return res.status(204).send()
}
const updateClientController = async (req:Request, res:Response)=>{
    const updateClient =  await updateClientService(req.body, req.params.id)
    return res.json(updateClient)

}
export {createClientController, listClientController, deleteClientController, updateClientController}