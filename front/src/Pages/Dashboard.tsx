import { STYLEDDASHBOARD } from "./style";
import { Clients } from "../components/clients";

export const Dashboard = () => {
  return (
    <STYLEDDASHBOARD>
      <button className="create">+ Cliente</button>
      <div className="outside">
        <Clients />
      </div>
    </STYLEDDASHBOARD>
  );
};
