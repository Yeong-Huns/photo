import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'

// 페이지 컴포넌트
import {MainPage} from "@/pages/index";
import {RecoilRoot} from "recoil";
import {BookmarkPage} from "@/pages/bookmark";
import {toastConfig} from "react-simple-toasts";
import {useEffect} from "react";
import {ToastContainer} from "@components/common/toast/ToastContainer.tsx";


function App() {
    useEffect(() => {
        toastConfig({ theme: 'dark', position: 'top-right', duration: 3000 });
    }, []);
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index path={"/"} element={<MainPage/>}/>
                    <Route path={'/:id'} element={<MainPage/>}/>
                    <Route path={'/bookmark'} element={<BookmarkPage/>}/>
                </Routes>
                <ToastContainer />
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App
