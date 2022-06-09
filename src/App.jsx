import React, { useState } from "react";
import Login from "./Login";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Registration from "./Registration";
import Todo from "./Todo";
const App = () => {

    const [login, setLogin] = useState("");
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>
            </BrowserRouter>



        </>

    )
}
export default App;
