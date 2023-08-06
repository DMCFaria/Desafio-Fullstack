import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entities"


const listClientService = async (): Promise<any> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const findClient = await clientRepository.find({
        relations:{
            contacts:true
        }
    }
    )
    return findClient
}
export { listClientService }