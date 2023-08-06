import { AppDataSource } from "../../data-source"
import { Contacts } from "../../entities/contacts.entities"


const listContactsService = async (): Promise<any> => {
    const contactsRepository = AppDataSource.getRepository(Contacts)
    const findContacts = await contactsRepository.find()
    return findContacts
}
export { listContactsService }