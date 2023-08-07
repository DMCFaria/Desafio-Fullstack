import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { STYLEDCLIENT, STYLEDUL } from "../../components/clients/style";
import { Client } from "./@types";

export const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);

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
            Email: <span>{client.email}</span>{" "}
          </h2>
          <h2>
            Telefone: <span>{client.number}</span>
          </h2>
          <h2>
            Registrado em: <span>{client.created_at}</span>{" "}
          </h2>
          <form>
            <button>Editar</button>
            <button>Apagar</button>
            <button>+ Contato</button>
          </form>
        </div>
        <h2>Contatos</h2>

        {client.contacts.map((contact) => (
          <div>
            <h2>
              Nome: <span>{contact.name}</span>
            </h2>
            <h2>
              Email: <span>{contact.email}</span>{" "}
            </h2>
            <h2>
              Telefone: <span>{contact.number}</span>
            </h2>
            <h2>
              Registrado em: <span>{contact.created_at}</span>{" "}
            </h2>
            <form>
              <button>Editar</button>
              <button>Apagar</button>
            </form>
          </div>
        ))}
      </STYLEDCLIENT>
    ));

  return (
    <>
 
      <STYLEDUL>{renderClients(clients)}</STYLEDUL>;
    </>
  );
};
