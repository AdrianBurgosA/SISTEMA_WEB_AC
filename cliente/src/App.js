import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/public/Login";
import UsersPage from "./pages/admin/UsersPage";
import TicketsPage from "./pages/admin/TickestPage";
import ClientesPage from "./pages/admin/ClientesPage";
import Dash from "./pages/agent/Dash";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                {/* rutas para el admin */}
                <Route path="/admin/usuarios" element={<UsersPage/>}/>
                <Route path="/admin/tickets" element={<TicketsPage/>}/>
                <Route path="/admin/clientes" element={<ClientesPage/>}/>
                {/* rutas para el agente */}
                <Route path="/agente" element={<Dash/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;