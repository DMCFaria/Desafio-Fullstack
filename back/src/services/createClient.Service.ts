import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entities";
import { Tclient, TclientRequest } from "../interfaces/client.interface";


const createClientService = async (data: TclientRequest): Promise<Tclient> =>{
    const{email,name,number} = data
    const clientRepository = AppDataSource.getRepository(Client)
    const findClient = await clientRepository.findOne({
        where:{
            email
        }
    })
    if(findClient){
        throw new Error("user already exists")
    }
    const client = clientRepository.create({
        name,
        email,
        number
    })
    await clientRepository.save(client)
    

    return client
}
export {createClientService}