import {useRecoilValueLoadable} from "recoil";
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
            {/*<CommonHeader/>*/}
            {/* 공통 네비게이션 UI 부분 */}
            <CommonNav/>
            <div className="flex flex-col items-center justify-start w-full ">
                <div
                    className="flex items-center justify-center w-full h-80 bg-cover"
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
                            우리의 관대한 커뮤니티를 통해 공유되는 0.1 백만개의 이미지와 비디오를 살펴보세요.
                        </span>
                        {/* 검색창 UI 부분 */}
                        <CommonSearch/>
                    </div>
                </div>
                <div className="grid grid-cols-4 p-4 gap-6">
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
