import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'

// 페이지 컴포넌트
import {MainPage} from "@/pages/index";
import {RecoilRoot} from "recoil";


function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index path={"/"} element={<MainPage/>}/>
                    <Route path={'/:id'} element={<MainPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App
