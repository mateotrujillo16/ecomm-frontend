import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { UserProfilePage } from "./UserProfilePage";

export const Main = () =>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/user-profile" element={<UserProfilePage/>}/>
            </Routes>
        </BrowserRouter>
    )
        
}
