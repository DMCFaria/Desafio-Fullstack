import { api } from "../../services/api";
import { Client, Contacts } from "../clients/@types";
import { STYLEDMODAL } from "./sytle";

interface ICreateModal {
  isModalOpen: boolean;
  setOpenCreateModal: (isModalOpen: boolean) => void;
}
interface IEditModal {
  id: string;
  isModalOpen: boolean;
  setOpenEditModal: (isModalOpen: boolean) => void;
}
interface IDeleteModal {
  id: string;
  isModalOpen: boolean | any;
  setOpenDeleteModal: (isModalOpen: boolean) => void;
}
interface IAddContactModal {
  id: string;
  isModalOpen: boolean;
  setOpenAddContactModal: (isModalOpen: boolean) => void;
}
interface IContactEditModal {
  id: string;
  isModalOpen: boolean;
  setContactOpenEditModal: (isModalOpen: boolean) => void;
}
interface IContactDeleteModal {
  id: string;
  isModalOpen: boolean;
  setContactOpenDeleteModal: (isModalOpen: boolean) => void;
}

const CreateClients = async (setOpenCreateModal: any, isModalOpen: any) => {
  const name: any = document.querySelector(".name");
  const email: any = document.querySelector(".email");
  const tel: any = document.querySelector(".tel");
  const response = await api
    .post<Client>("/clients", {
      name: name.value,
      email: email.value,
      number: tel.value,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  setOpenCreateModal(!isModalOpen);
};

export const DeleteClients = async (
  id: string,
  setOpenDeleteModal: { (isModalOpen: boolean): void; (arg0: boolean): void },
  isModalOpen: any
) => {
  const response = await api.delete<Client>(`/clients/${id}`);
  setOpenDeleteModal(!isModalOpen);
};

export const EditClients = async (
  id: string,
  setOpenEditModal: { (isModalOpen: boolean): void; (arg0: boolean): void },
  isModalOpen: any
) => {
  const name: any = document.querySelector(".name");
  const email: any = document.querySelector(".email");
  const tel: any = document.querySelector(".tel");
  const response = await api
    .patch<Client>(`/clients/${id}`, {
      name: name.value,
      email: email.value,
      number: tel.value,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  setOpenEditModal(!isModalOpen);
};

//-----------Contacts--------------//

const CreateContacts = async (
  setOpenAddContactModal: any,
  isModalOpen: any,
  id: any
) => {
  const name: any = document.querySelector(".name");
  const email: any = document.querySelector(".email");
  const tel: any = document.querySelector(".tel");
  const response = await api
    .post<Contacts>("/contacts", {
      name: name.value,
      email: email.value,
      number: tel.value,
      client_id: id,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  setOpenAddContactModal(!isModalOpen);
};

export const EditContacts = async (
  id: string,
  setContactOpenEditModal: {
    (isModalOpen: boolean): void;
    (arg0: boolean): void;
  },
  isModalOpen: any
) => {
  const name: any = document.querySelector(".name");
  const email: any = document.querySelector(".email");
  const tel: any = document.querySelector(".tel");
  const response = await api
    .patch<Client>(`/contacts/${id}`, {
      name: name.value,
      email: email.value,
      number: tel.value,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  setContactOpenEditModal(!isModalOpen);
};

export const DeleteContacts = async (
  setContactOpenDeleteModal: {
    (isModalOpen: boolean): void;
    (arg0: boolean): void;
  },
  isModalOpen: any,
  id: string
) => {
  const response = await api.delete<Contacts>(`/contacts/${id}`);
  setContactOpenDeleteModal(!isModalOpen);
};

//_____________________________________________HTML________________________________________________//
export const CreateModal = ({
  isModalOpen,
  setOpenCreateModal,
}: ICreateModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Criar novo cliente</h1>
          <span onClick={() => setOpenCreateModal(!isModalOpen)}>x</span>
          <input className="name" type="text" placeholder="Nome" />
          <input className="email" type="email" placeholder="Email" />
          <input
            className="tel"
            type="text"
            placeholder="Telefone (Apenas números)"
          />
          <input
            type="button"
            value="Criar"
            onClick={() => CreateClients(setOpenCreateModal, isModalOpen)}
          />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const EditModal = ({
  isModalOpen,
  setOpenEditModal,
  id,
}: IEditModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Editar cliente</h1>
          <span onClick={() => setOpenEditModal(!isModalOpen)}>x</span>
          <input className="name" type="text" placeholder="Nome" />
          <input className="email" type="email" placeholder="Email" />
          <input
            className="tel"
            type="text"
            placeholder="Telefone (Apenas números)"
          />
          <input
            type="button"
            value="Editar"
            onClick={() => EditContacts(id, setOpenEditModal, isModalOpen)}
          />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const DeleteModal = ({
  setOpenDeleteModal,
  isModalOpen,
  id,
}: IDeleteModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Deletar cliente e seus contatos?</h1>
          <span onClick={() => setOpenDeleteModal(!isModalOpen)}>x</span>
          <input
            type="button"
            value="Cancelar"
            onClick={() => setOpenDeleteModal(!isModalOpen)}
          />
          <input
            type="button"
            value="Deletar"
            onClick={() => DeleteClients(id, setOpenDeleteModal, isModalOpen)}
          />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const AddContactModal = ({
  setOpenAddContactModal,
  isModalOpen,
  id,
}: IAddContactModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Criar novo contato</h1>
          <span onClick={() => setOpenAddContactModal(!isModalOpen)}>x</span>
          <input className="name" type="text" placeholder="Nome" />
          <input className="email" type="email" placeholder="Email" />
          <input
            className="tel"
            type="text"
            placeholder="Telefone (Apenas números)"
          />
          <input
            type="button"
            value="Criar"
            onClick={() =>
              CreateContacts(setOpenAddContactModal, isModalOpen, id)
            }
          />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const ContactEditModal = ({
  isModalOpen,
  setContactOpenEditModal,
  id,
}: IContactEditModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Editar contato</h1>
          <span onClick={() => setContactOpenEditModal(!isModalOpen)}>x</span>
          <input className="name" type="text" placeholder="Nome" />
          <input className="email" type="email" placeholder="Email" />
          <input
            className="tel"
            type="text"
            placeholder="Telefone (Apenas números)"
          />
          <input
            type="button"
            value="Editar contato"
            onClick={() =>
              EditContacts(id, setContactOpenEditModal, isModalOpen)
            }
          />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const ContactDeleteModal = ({
  setContactOpenDeleteModal,
  isModalOpen,

  id,
}: IContactDeleteModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Deletar contato?</h1>
          <span onClick={() => setContactOpenDeleteModal(!isModalOpen)}>x</span>
          <input
            type="button"
            value="Cancelar"
            onClick={() => setContactOpenDeleteModal(!isModalOpen)}
          />
          <input
            type="button"
            value="Deletar"
            onClick={() =>
              DeleteContacts(setContactOpenDeleteModal, isModalOpen, id)
            }
          />
        </form>
      </STYLEDMODAL>
    );
  }
};
