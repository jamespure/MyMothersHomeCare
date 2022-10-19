import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { MaintenancePage } from "./pages";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MaintenancePage />} />
      </Routes>
    </>
  );
};

export default App;
