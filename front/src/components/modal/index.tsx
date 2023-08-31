import { STYLEDMODAL } from "./sytle";

interface ICreateModal {
  isModalOpen: boolean;
  setOpenCreateModal: (isModalOpen: boolean) => void;
}
interface IEditModal {
  isModalOpen: boolean;
  setOpenEditModal: (isModalOpen: boolean) => void;
}
interface IDeleteModal {
  isModalOpen: boolean;
  setOpenDeleteModal: (isModalOpen: boolean) => void;
}
interface IAddContactModal {
  isModalOpen: boolean;
  setOpenAddContactModal: (isModalOpen: boolean) => void;
}
interface IContactEditModal {
  isModalOpen: boolean;
  setContactOpenEditModal: (isModalOpen: boolean) => void;
}
interface IContactDeleteModal {
  isModalOpen: boolean;
  setContactOpenDeleteModal: (isModalOpen: boolean) => void;
}

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
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Telefone (Apenas números)" />
          <input type="button" value="Criar" />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const EditModal = ({ isModalOpen, setOpenEditModal }: IEditModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Editar cliente</h1>
          <span onClick={() => setOpenEditModal(!isModalOpen)}>x</span>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Telefone (Apenas números)" />
          <input type="button" value="Editar" />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const DeleteModal = ({
  isModalOpen,
  setOpenDeleteModal,
}: IDeleteModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Deletar cliente e seus contatos?</h1>
          <span onClick={() => setOpenDeleteModal(!isModalOpen)}>x</span>
          <input type="button" value="Cancelar" onClick={() => setOpenDeleteModal(!isModalOpen)} />
          <input type="button" value="Deletar" />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const AddContactModal = ({
  isModalOpen,
  setOpenAddContactModal,
}: IAddContactModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Criar novo contato</h1>
          <span onClick={() => setOpenAddContactModal(!isModalOpen)}>x</span>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Telefone (Apenas números)" />
          <input type="button" value="Criar" />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const ContactEditModal = ({
  isModalOpen,
  setContactOpenEditModal,
}: IContactEditModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Editar contato</h1>
          <span onClick={() => setContactOpenEditModal(!isModalOpen)}>x</span>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Telefone (Apenas números)" />
          <input type="button" value="Editar contato" />
        </form>
      </STYLEDMODAL>
    );
  }
};
export const ContactDeleteModal = ({ isModalOpen, setContactOpenDeleteModal }: IContactDeleteModal) => {
  if (isModalOpen) {
    return (
      <STYLEDMODAL>
        <form>
          <h1>Deletar contato?</h1>
          <span onClick={() => setContactOpenDeleteModal(!isModalOpen)}>x</span>
          <input type="button" value="Cancelar" onClick={() => setContactOpenDeleteModal(!isModalOpen)} />
          <input type="button" value="Deletar" />
        </form>
      </STYLEDMODAL>
    );
  }
};
