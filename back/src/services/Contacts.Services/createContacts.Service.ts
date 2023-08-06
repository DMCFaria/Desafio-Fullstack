
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entities";
import { Contacts } from "../../entities/contacts.entities";
import { AppError } from "../../errors/AppError";
import { TContacts, TContactsRequest } from "../../interfaces/contacts.interface";


const createContactsService = async (data: TContactsRequest): Promise<TContacts> => {
    const { email, name, number, client_id } = data
    const clientRepository = AppDataSource.getRepository(Client)
    const contactsRepository = AppDataSource.getRepository(Contacts)
    const client:Client|null = await clientRepository.findOneBy({ id: client_id })
    if (!client){
        throw new AppError("client not found", 409)
    }

    const findContacts = await contactsRepository.findOne({
        where: {
            email
        }
    })
    if (findContacts) {
        throw new AppError("user already exists", 409)
    }
    const contacts = contactsRepository.create({
        ...data,
        client,
        created_at: new Date()
    })
    await contactsRepository.save(contacts)

    return contacts
}
export { createContactsService }