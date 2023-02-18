import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from "./components/pages/Root"
import CameraPage from "./components/pages/Camera"
import { useState } from "react"
import PrinterPage from "./components/pages/Printer"
import Login from "./components/pages/Login"

function App(){

    const [Query, setQuery] = useState("")

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root Query={Query} setQuery={setQuery}/>}/>
                <Route path="/camera" element={<CameraPage Query={Query} setQuery={setQuery}/>}/>
                <Route path="/printer" element={<PrinterPage Query={Query} setQuery={setQuery}/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;