import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Password from "../pages/Password";
import CadastrarContatos from "../pages/contatos/CadastrarContatos";
import ConcultaContatos from "../pages/contatos/ConsultarContatos";
import EditarContatos from "../pages/contatos/EditarContatos";
 
import { Routes, Route } from "react-router-dom";
 
export default function Main() {
    return (
        <Routes>
 
            {/* Mapeamento da rota raiz do projeto */}
            <Route
                path="/"
                exact
                element={<Login />}
            />
 
            {/* Mapeamento da rota de cadastro de conta de usuário */}
            <Route
                path="/crie-sua-conta"
                element={<Register />}
            />
 
            {/* Mapeamento da rota de 'esqueci minha senha' */}
            <Route
                path="/esqueci-minha-senha"
                element={<Password />}
            />
             {/* Mapeamento da rota de 'Cadastrar Contatos' */}
             <Route
                path="/cadastrar-contatos"
                element={<CadastrarContatos />}
            />

             {/* Mapeamento da rota de 'Conculta Contatos' */}
             <Route
                path="/consultar-contatos"
                element={<ConcultaContatos />}
            />

             {/* Mapeamento da rota de 'Editar Contatos' */}
             <Route
                path="/editar-contatos"
                element={<EditarContatos />}
            />
 
        </Routes>
    )
}


