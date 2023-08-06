
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entities";
import { AppError } from "../errors/AppError";
import { Tclient, TclientRequest } from "../interfaces/client.interface";



const createClientService = async (data: TclientRequest): Promise<Tclient> => {
    const { email, name, number } = data
    const clientRepository = AppDataSource.getRepository(Client)
    const findClient = await clientRepository.findOne({
        where: {
            email
        }
    })
    if (findClient) {
        throw new AppError("user already exists", 409)
    }
    const client = clientRepository.create({
        name,
        email,
        number,
        created_at: new Date()
    })
    await clientRepository.save(client)


    return client
}
export { createClientService }