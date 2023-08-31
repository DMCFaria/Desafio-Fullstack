import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { STYLEDCLIENT, STYLEDUL } from "../../components/clients/style";
import { Client } from "./@types";
import {AddContactModal, ContactDeleteModal, ContactEditModal, CreateModal, DeleteModal, EditModal} from "../modal";

export const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
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
  }, []);

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
            <div className="button" onClick={()=> setOpenEditModal(!OpenEditModal)}>Editar</div>
            <div className="button" onClick={()=> setOpenDeleteModal(!OpenDeleteModal)}>Apagar</div>
            <div className="button" onClick={()=>setOpenAddContactModal(!OpenAddContactModal)}>+ Contato</div>
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
              <div className="button" onClick={()=>setContactOpenEditModal(!ContactOpenEditModal)}>Editar</div >
              <div className="button" onClick={()=>setContactOpenDeleteModal(!ContactOpenDeleteModal)}>Apagar</div >
            </form>
          </div>
        ))}
      </STYLEDCLIENT>
    ));

  return (
    <>
      <CreateModal isModalOpen = {OpenCreateModal} setOpenCreateModal={setOpenCreateModal}/>
      <EditModal  isModalOpen = {OpenEditModal} setOpenEditModal={setOpenEditModal}/>
      <DeleteModal   isModalOpen = {OpenDeleteModal} setOpenDeleteModal={setOpenDeleteModal}/>
      <AddContactModal  isModalOpen = {OpenAddContactModal} setOpenAddContactModal={setOpenAddContactModal}/>
      <ContactEditModal isModalOpen = {ContactOpenEditModal} setContactOpenEditModal={setContactOpenEditModal}/>
      <ContactDeleteModal isModalOpen = {ContactOpenDeleteModal} setContactOpenDeleteModal={setContactOpenDeleteModal}/>


      <button className="create" onClick={()=> setOpenCreateModal(!OpenCreateModal)}>
        + Cliente
      </button>
      <div className="outside">
        <STYLEDUL>{renderClients(clients)}</STYLEDUL>;
      </div>
    </>
  );
};
