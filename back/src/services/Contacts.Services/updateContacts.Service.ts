
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import { AppError } from "../../errors/AppError";
import { TContacts, TContactsRequest, TContactsUpdate } from "../../interfaces/contacts.interface";
import { contactsSchema } from "../../schemas/contacts.schemas";



const updateContactsService = async (data: TContactsUpdate, contactsId: string): Promise<TContacts> => {
    const contactsRepository = AppDataSource.getRepository(Contacts)
    const findContacts = await contactsRepository.findOneBy({ id: contactsId })
    if (!findContacts) {
        throw new AppError("Contacts not found", 404)
    }
    const contacts = contactsRepository.create({
       ...findContacts,
       ...data
    })
    await contactsRepository.save(contacts)


    return contactsSchema.parse(Contacts)   
}
export { updateContactsService }