export const DetailDialog = () => {
    return <div className={'fixed inset-0 z-10 flex items-center justify-center w-full h-screen bg-transparent'}>
        <div className={'flex flex-col items-center justify-between w-1/2 h-[700px] bg-white rounded-xl'}>
            <div className={'flex items-center justify-between w-full h-[70px] px-4 border-b border-gray-300'}>
                <div className={'flex items-center justify-start gap-2'}>
                    <button className={'flex items-center justify-center border-none outline-none bg-transparent cursor-pointer'}>
                        {/*구글 아이콘 사용*/}
                    </button>
                    <img src={""} alt={"프로필사진"} className={'rounded-full'}/>
                    <span className={'font-semibold'}>Yeong-Hun</span>
                </div>
                <div className={'flex items-center justify-center gap-2'}>
                    <button className={'flex items-center justify-center py-1 px-[6px] rounded-md text-center cursor-pointer bg-white border border-gray-300 text-gray-600'}>
                        {/*구글 아이콘 사용*/}
                        북마크
                    </button>
                    <button className={'flex items-center justify-center py-1 px-[6px] rounded-md text-center cursor-pointer bg-white border border-gray-300 text-gray-600'}>다운로드</button>
                </div>
            </div>
            <div className={'flex items-center justify-center w-full h-[calc(100% - 220px)]'}>
                <img src={""} alt={"상세 이미지"} className={'h-full object-cover'}/>
            </div>
            <div className={'flex flex-col items-center justify-center w-full h-[150px] px-6 gap-6'}>
                <div className={'flex items-center justify-start gap-12'}>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-gray-500 font-medium'}>이미지크기</span>
                        <span className={'text-black font-medium'}>상세 데이터 조회</span>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-gray-500 font-medium'}>이미지크기</span>
                        <span className={'text-black font-medium'}>상세 데이터 조회</span>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-gray-500 font-medium'}>이미지크기</span>
                        <span className={'text-black font-medium'}>상세 데이터 조회</span>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-gray-500 font-medium'}>이미지크기</span>
                        <span className={'text-black font-medium'}>상세 데이터 조회</span>
                    </div>
                </div>
                <div className={'flex items-center justify-start w-full gap-2'}>
                    <div className={'px-1 pt-2 pb-1.5 rounded-se bg-gray-200 text-gray-500'}>태그 데이터</div>
                </div>
            </div>
        </div>
    </div>
}