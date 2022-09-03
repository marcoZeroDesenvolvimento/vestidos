import React from "react";

import { NativeRouter, Route ,Routes} from "react-router-native";

import Login from "./pages/login";
import Cadastro from "./pages/Cadastro"
import Home from "./pages/home";
import SeeProduct from "./pages/seeProduct";
import Finalizar from "./pages/finalizar";

function RoutesTeste() {
  return (
    <NativeRouter>
        <Routes>
            <Route  path="/login" element={<Login/>} />
            <Route  path="/cadastro" element={<Cadastro/>}  />
            <Route  path="/" element={<Home/>} />
            <Route  path="/seeProduct/:id" element={<SeeProduct/>} />
            <Route  path="/finalizar" element={<Finalizar/>}/>
        </Routes>
    </NativeRouter>
  );
}

export default RoutesTeste;