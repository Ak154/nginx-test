import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationForm from "./pages/RegistrationForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
