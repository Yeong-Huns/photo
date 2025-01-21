import {CommonHeader} from "@components/common/header/CommonHeader.tsx";
import {useEffect, useState} from "react";
import Card from "@/pages/bookmark/components/Card.tsx";

export const BookmarkPage = () => {
    const [data, setData] = useState([]);
    const getData = () => {}

    useEffect(() => {
        getData()
    }, []);

    return <div className={'flex flex-col items-center justify-start w-full h-screen'}>
        {/*공통 헤더 UI */}
        <CommonHeader/>
        <main className={'flex flex-wrap items-start justify-start w-full h-[calc(100% - 56px)] p-12 gap-6'}>
            <Card/>
        </main>
    </div>
}