import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MaintenancePage } from "./pages";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MaintenancePage />} />
    </Routes>
  );
};

export default App;
