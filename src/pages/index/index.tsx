import {CommonHeader} from "@components/common/header/CommonHeader.tsx";

export const MainPage = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full h-screen">
            {/* 공통 헤더 UI 부분 */}
            <CommonHeader/>
            {/* 공통 네비게이션 UI 부분 */}
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
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-3/5 flex-wrap p-4 px-[60px] gap-4 overflow-y-scroll">
                    {/*이미지박스*/}
                </div>
            </div>
            {/*공통 푸터 UI 부분*/}
        </div>
    )
}
