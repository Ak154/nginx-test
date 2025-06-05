import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationForm from "./pages/RegistrationForm";
import UpdateProfile from "./pages/UpdateProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationForm/>} />
        <Route path="/update" element={<UpdateProfile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
