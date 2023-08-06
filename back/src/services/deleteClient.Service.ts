
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entities";
import { AppError } from "../errors/AppError";


const deleteClientService = async (clientId:string): Promise<void> =>{
   const clientRepository = AppDataSource.getRepository(Client)
   const client = await clientRepository.findOneBy({id:clientId})

   if(!client){
    throw new AppError ("Cliente não encontrado", 404)
   }
    await clientRepository.remove(client)
}
export {deleteClientService}