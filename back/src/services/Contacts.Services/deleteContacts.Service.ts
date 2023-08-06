
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entities";
import { AppError } from "../../errors/AppError";


const deleteContactsService = async (contactsId:string): Promise<void> =>{
   const contactsRepository = AppDataSource.getRepository(Contacts)
   const contacts = await contactsRepository.findOneBy({id:contactsId})

   if(!contacts){
    throw new AppError ("contactse não encontrado", 404)
   }
    await contactsRepository.remove(contacts)
}
export {deleteContactsService}