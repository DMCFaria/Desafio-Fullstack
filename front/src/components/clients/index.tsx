import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { STYLEDCLIENT, STYLEDUL } from "../../components/clients/style";
import { Client } from "./@types";
import {AddContactModal, ContactDeleteModal, ContactEditModal, CreateModal, DeleteClients, DeleteModal, EditModal} from "../modal";

export const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [actualId, setActualId]= useState<any>()
  const [OpenCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [OpenEditModal, setOpenEditModal] = useState<boolean>(false);
  const [OpenDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [OpenAddContactModal, setOpenAddContactModal] = useState<boolean>(false);
  const [ContactOpenEditModal, setContactOpenEditModal] = useState<boolean>(false);
  const [ContactOpenDeleteModal, setContactOpenDeleteModal] = useState<boolean>(false);


  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await api.get<Client[]>("/clients");
        setClients(response.data);
      } catch {
        console.log("No response");
      }
    };
    getClients();
  }, [clients]);

  const renderClients = (clientsToRender: Client[]) =>
    clientsToRender.map((client) => (
      <STYLEDCLIENT className="client" key={client.id}>
        <div>
          <h2>
            Nome: <span>{client.name}</span>
          </h2>
          <h2>
            Email: <span>{client.email}</span>
          </h2>
          <h2>
            Telefone: <span>{client.number}</span>
          </h2>
          <h2>
            Registrado em: <span>{client.created_at}</span>
          </h2>
          <form>
            <div className="button" onClick={()=> setIdEditModal(client.id)}>Editar</div>
            <div className="delete button" onClick={()=>setIdDeleteModal(client.id)}>Apagar</div>
            <div className="button" onClick={()=>setIdAddContact(client.id)}>+ Contato</div>
          </form>
        </div>
        <h2>Contatos</h2>

        {client.contacts.map((contact) => (
          <div>
            <h2>
              Nome: <span>{contact.name}</span>
            </h2>
            <h2>
              Email: <span>{contact.email}</span>
            </h2>
            <h2>
              Telefone: <span>{contact.number}</span>
            </h2>
            <h2>
              Registrado em: <span>{contact.created_at}</span>
            </h2>
            <form>
              <div className="button" onClick={()=>setContactIdEditModal(contact.id)}>Editar</div >
              <div className="button" onClick={()=>setContactIdDeleteModal(contact.id)}>Apagar</div >
            </form>
          </div>
        ))}
      </STYLEDCLIENT>
    ));


  const setIdEditModal = (id:string) =>{
      setActualId(id)
      setOpenEditModal(!OpenEditModal)
  }
   const setIdDeleteModal = (id:string) =>{
    setActualId(id)
    setOpenDeleteModal(!OpenDeleteModal)
  }
  const setIdAddContact = (id:string)=>{
    setActualId(id)
    setOpenAddContactModal(!OpenAddContactModal)
  }
  
  const setContactIdEditModal = (id:string)=>{
  setActualId(id)
  setContactOpenEditModal(!ContactOpenEditModal)
}
const setContactIdDeleteModal = (id:string)=>{
  setActualId(id)
  setContactOpenDeleteModal(!ContactOpenDeleteModal)
}

  return (
    <>
      <CreateModal isModalOpen = {OpenCreateModal} setOpenCreateModal={setOpenCreateModal}/>
      <EditModal  isModalOpen = {OpenEditModal} setOpenEditModal={setOpenEditModal} id={actualId}/>
      <DeleteModal isModalOpen = {OpenDeleteModal} setOpenDeleteModal={setOpenDeleteModal} id={actualId}/>
      <AddContactModal  isModalOpen = {OpenAddContactModal} setOpenAddContactModal={setOpenAddContactModal} id={actualId}/>
      <ContactEditModal isModalOpen = {ContactOpenEditModal} setContactOpenEditModal={setContactOpenEditModal} id={actualId}/>
      <ContactDeleteModal isModalOpen = {ContactOpenDeleteModal} setContactOpenDeleteModal={setContactOpenDeleteModal} id={actualId}/>


      <button className="create" onClick={()=> setOpenCreateModal(!OpenCreateModal)}>
        + Cliente
      </button>
      <div className="outside">
        <STYLEDUL>{renderClients(clients)}</STYLEDUL>;
      </div>
    </>
  );
};
