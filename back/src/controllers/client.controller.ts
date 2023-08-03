import { Request, Response } from "express"
import { TclientRequest } from "../interfaces/client.interface"
import { createClientService } from "../services/createClient.Service"

const createClientController = async (req:Request, res:Response)=>{
    const {email, name, number}:TclientRequest = req.body

    const newClient = await createClientService(req.body)
    return res.status(201).json(newClient)
}
export {createClientController}