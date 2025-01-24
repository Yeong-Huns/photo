import {CommonHeader} from "@components/common/header/CommonHeader.tsx";
import {useEffect, useState} from "react";
import Card from "@/pages/bookmark/components/Card.tsx";
import {CardDTO} from "@/pages/index/types/card.ts";
import {CommonNav} from "@components/common/navigation/CommonNav.tsx";

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

    return <div className={'flex flex-col items-center justify-start w-full min-h-screen'}>
        {/*공통 헤더 UI */}
        <CommonNav/>
        <main className={'grid grid-cols-4 p-4 gap-6'}>
            { (!data.length) && <div className={'text-gray-300 flex items-center justify-center w-full h-full text-3xl font-semibold'}>조회 가능한 데이터가 없습니다.</div> }
            {
                data.map((item: CardDTO, index: number) => {
                return <Card prop={item} key={index}/>
            })
            }
        </main>
    </div>
}