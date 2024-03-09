import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/public/Login";
import Main from "./pages/admin/Main";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/admin" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;