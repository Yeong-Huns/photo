import {CommonHeader} from "@components/common/header/CommonHeader.tsx";
import {CommonSearch} from "@components/common/searchBar/CommonSearch.tsx";
import {CommonNav} from "@components/common/navigation/CommonNav.tsx";
import {CommonFooter} from "@components/common/footer/CommonFooter.tsx";
import {Card} from "@/pages/components/Card.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {CardDTO} from "@/pages/index/types/card.ts";


export const MainPage =  () => {
    const [imgUrls, setImgUrls] = useState([]);

    const cardList = imgUrls.map((card: CardDTO) => {
        return <Card data={card} key={card.id}/>;
    })

    useEffect(()=> {
        const getData = async () => {
            const API_URL = import.meta.env.VITE_API_URL;
            const API_KEY = import.meta.env.VITE_APP_API_KEY;
            const PER_PAGE = import.meta.env.VITE_APP_PER_PAGE;

            const searchValue = 'Korea'
            const pageValue = 100;

            try{
                const res =  await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`);
                if(res.status === 200) setImgUrls(res.data.results);
            }catch(e){
                console.error(e);
            }
        }
        getData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-start w-full min-h-screen">
            {/* 공통 헤더 UI 부분 */}
            <CommonHeader/>
            {/* 공통 네비게이션 UI 부분 */}
            <CommonNav/>
            <div className="flex flex-col items-center justify-start w-full h-[calc(100vh-56px-50px-50px)]">
                <div
                    className="flex items-center justify-center w-full h-2/5 bg-cover"
                    style={{
                        backgroundImage: "url('src/assets/images/img.png')",
                        backgroundPosition: '100% 15%',
                    }}
                >
                    <div className="flex flex-col">
                        <span className="mb-1 text-white text-[3rem] font-bold">
                            PhotoSplash
                        </span>
                        <span className="text-white mb-8">
                            인터넷의 시각 자료 출처입니다. <br/>
                            모든 지역에 있는 크리에이티브들의 지원을 받습니다.
                        </span>
                        {/* 검색창 UI 부분 */}
                        <CommonSearch/>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-3/5 flex-wrap p-4 px-[60px] gap-4 overflow-y-scroll">
                    {/*이미지박스*/}
                    {cardList}
                </div>

            </div>
            <CommonFooter/>
            {/*공통 푸터 UI 부분*/}
        </div>
    )
}
