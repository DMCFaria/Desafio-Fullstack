import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
