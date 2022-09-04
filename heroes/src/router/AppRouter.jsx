import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { Navbar } from "../design/components/Navbar";
import { DcPage } from "../superheroes/pages/DcPage";
import { MarvelPage } from "../superheroes/pages/MarvelPage";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
