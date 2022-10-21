import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { MaintenancePage } from "./pages";

const App: FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<MaintenancePage />} />
      </Routes>
    </>
  );
};

export default App;
