export interface Contacts {
    id: string;
    name: string;
    email: string;
    number: string;
    created_at: string;
    client_id: string;
    client: Client[];
  }
  
 export interface Client {
    id: string;
    name: string;
    email: string;
    number: string;
    created_at: string;
    contacts: Contacts[];
  }