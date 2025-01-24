import {CardDTO} from "@/pages/index/types/card.ts";

type Props = {
    prop: CardDTO
}

const Card = ({prop} : Props ) => {

    return <div className={'flex flex-col w-full h-full object-cover hover:scale-105 transition ease-in-out rounded-md bg-white shadow-lg'}>
        <div className={'flex items-center justify-center w-full h-[192px] rounded-t-xl bg-gray-300'}>
            <img src={prop.urls.small} alt={'사진이미지'} className={'w-full h-full rounded-t-xl object-cover'}/>
        </div>
        <div className={'flex flex-col w-full h-[168px] p-5 gap-1 '}>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px] font-semibold'}>작성자</span>
                <span className={'text-gray-400 truncate flex-1'}>{prop.user.name}</span>
            </div>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px] font-semibold'}>이미지 크기</span>
                <span className={'text-gray-400 truncate flex-1'}>{prop.width} X {prop.height}</span>
            </div>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px] font-semibold'}>업로드 날짜</span>
                <span className={'text-gray-400 truncate flex-1'}>{prop.created_at.split('T')[0]}</span>
            </div>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px] font-semibold'}>마지막 업데이트</span>
                <span className={'text-gray-400 truncate flex-1'}>{prop.updated_at.split('T')[0]}</span>
            </div>
            <div className={'flex items-center justify-start w-full gap-3'}>
                <span className={'flex items-center justify-start w-[120px] font-semibold'}>다운로드 수</span>
                <span className={'text-gray-400 truncate flex-1'}>{prop.likes}</span>
            </div>
        </div>
    </div>
}

export default Card;