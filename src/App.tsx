import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'

// 페이지 컴포넌트
import {MainPage} from "@/pages/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path={"/"} element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
