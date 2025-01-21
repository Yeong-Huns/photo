const Card = () => {

    return <div className={'flex flex-col min-w-[282px] h-[360px] rounded-xl bg-white shadow-lg'}>
        <div className={'flex items-center justify-center w-full h-[192px] rounded-t-xl bg-gray-300'}>
            <div className={'w-full h-full rounded-tl-xl'}></div>
        </div>
        <div className={'flex flex-col w-full h-[168px] p-5 gap-1'}>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px]'}>작성자</span>
                <span className={'text-gray-400'}>값</span>
            </div>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px]'}>이미지 크기</span>
                <span className={'text-gray-400'}>값</span>
            </div>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px]'}>업로드 날짜</span>
                <span className={'text-gray-400'}>값</span>
            </div>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px]'}>마지막 업데이트</span>
                <span className={'text-gray-400'}>값</span>
            </div>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px]'}>다운로드 수</span>
                <span className={'text-gray-400'}>값</span>
            </div>
        </div>
    </div>
}

export default Card;