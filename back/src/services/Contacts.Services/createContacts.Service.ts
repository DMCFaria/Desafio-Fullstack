
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import { AppError } from "../../errors/AppError";
import { TContacts, TContactsRequest } from "../../interfaces/contacts.interface";



const createContactsService = async (data: TContactsRequest): Promise<TContacts> => {
    const { email, name, number } = data
    const contactsRepository = AppDataSource.getRepository(Contacts)
    const findContacts = await contactsRepository.findOne({
        where: {
            email
        }
    })
    if (findContacts) {
        throw new AppError("user already exists", 409)
    }
    const contacts = contactsRepository.create({
        name,
        email,
        number,
        created_at: new Date()
    })
    await contactsRepository.save(contacts)


    return contacts
}
export { createContactsService }