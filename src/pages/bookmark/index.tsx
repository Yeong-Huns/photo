import {CommonHeader} from "@components/common/header/CommonHeader.tsx";
import {useEffect, useState} from "react";
import Card from "@/pages/bookmark/components/Card.tsx";
import {CardDTO} from "@/pages/index/types/card.ts";

export const BookmarkPage = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'));
        if(getLocalStorage || getLocalStorage !== null) setData(getLocalStorage);
        else setData([]);
    }

    useEffect(() => {
        getData()
    }, []);

    return <div className={'flex flex-col items-center justify-start w-full h-screen'}>
        {/*공통 헤더 UI */}
        <CommonHeader/>
        <main className={'flex flex-wrap items-start justify-start w-full h-[calc(100% - 56px)] p-12 gap-6 overflow-y-scroll'}>
            { (!data.length) && <div className={'text-gray-300 flex items-center justify-center w-full h-full text-3xl font-semibold'}>조회 가능한 데이터가 없습니다.</div> }
            {
                data.map((item: CardDTO, index: number) => {
                return <Card prop={item} key={index}/>
            })
            }
        </main>
    </div>
}