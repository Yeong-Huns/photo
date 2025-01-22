import {useRecoilValueLoadable} from "recoil";
import {CommonHeader} from "@components/common/header/CommonHeader.tsx";
import {CommonSearch} from "@components/common/searchBar/CommonSearch.tsx";
import {CommonNav} from "@components/common/navigation/CommonNav.tsx";
import {CommonFooter} from "@components/common/footer/CommonFooter.tsx";
import {CardDTO} from "@/pages/index/types/card.ts";
import {imageData} from "@/store/selectors/imageSelectors.ts";
import {DetailDialog} from "@components/common/dialog/DetailDialog.tsx";
import {useMemo, useState} from "react";
import {Card} from "@/pages/components/Card.tsx";
import {SimpleSpinner} from "@/pages/components/Loading.tsx";


export const MainPage =  () => {
    const imgLoader = useRecoilValueLoadable(imageData);
    const [open, setOpen] = useState<boolean>(false); // Dialog 상태관리
    const [imgData, setImgData] = useState<CardDTO>();

    /*const CARD_LIST = imgLoader.state === 'hasValue' ? imgLoader.contents.map((card: CardDTO) => {
        return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/>;
    }) : null;*/

    const CARD_LIST = useMemo(() => {
        if(imgLoader.state === "hasValue"){
            return imgLoader.contents.results.map((card: CardDTO) => {
                return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/>;
            });
        } else {
            return <SimpleSpinner/>
        }
    }, [imgLoader])

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
                        backgroundImage: "url('src/assets/images/img_main2.jpg')",
                        backgroundPosition: '100% 15%',
                    }}
                >
                    <div className="flex flex-col">
                        <span className="mb-1 text-white text-[3rem] font-bold">
                            놀라운 무료 이미지
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
                    {CARD_LIST}
                </div>

            </div>
            {/*공통 푸터 UI 부분*/}
            <CommonFooter/>
            {open && <DetailDialog data={imgData} handleDialog={setOpen}/>}
        </div>
    )
}
