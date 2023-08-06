
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entities";
import { AppError } from "../errors/AppError";
import { Tclient, TclientRequest, TclientUpdate } from "../interfaces/client.interface";
import { clientSchema } from "../schemas/client.schemas";



const updateClientService = async (data: TclientUpdate, clientId: string): Promise<Tclient> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const findClient = await clientRepository.findOneBy({ id: clientId })
    if (!findClient) {
        throw new AppError("Client not found", 404)
    }
    const client = clientRepository.create({
       ...findClient,
       ...data
    })
    await clientRepository.save(client)


    return clientSchema.parse(client)   
}
export { updateClientService }