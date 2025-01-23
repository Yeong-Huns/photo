import {CardDTO} from "@/pages/index/types/card.ts";
import {useEffect, useState} from "react";
import {useToast} from "@/hooks/useToast.ts";


interface Props {
    data: CardDTO;
    handleDialog: (eventValue: boolean) => void;
}

export const DetailDialog = ({data, handleDialog}: Props) => {
    const [bookmark, setBookmark] = useState(false)
    const { addToast } = useToast();
    const closeDialog = () => {
        handleDialog(false);
    }

    const addBookmark = (selectedData: CardDTO) => {
        setBookmark(true)

        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))

        if(!getLocalStorage) {
            localStorage.setItem('bookmark', JSON.stringify([selectedData]))
            //toast("해당 이미지를 북마크에 저장하였습니다.")
            addToast("해당 이미지를 북마크에 저장하였습니다.", "success");
        } else {
            if(getLocalStorage.findIndex((item:CardDTO) => item.id === selectedData.id) > -1 ) {
                setBookmark(false)
                const prev = [...JSON.parse(localStorage.getItem('bookmark'))];
                const next = prev.filter((item:CardDTO) => item.id !== selectedData.id);
                localStorage.setItem('bookmark', JSON.stringify(next));
                //toast("해당 이미지를 북마크에서 제거하였습니다.");
                addToast("해당 이미지를 북마크에서 제거하였습니다.", "error");
            } else {
                const prev = [...JSON.parse(localStorage.getItem('bookmark')), selectedData];
                localStorage.setItem('bookmark', JSON.stringify(prev));
                //toast("해당 이미지를 북마크에 저장하였습니다.")
                addToast("해당 이미지를 북마크에 저장하였습니다.", "success");
            }
        }
    }

    useEffect(() => {
        const getLocalStorageItem = JSON.parse(localStorage.getItem('bookmark'));
        if(getLocalStorageItem && getLocalStorageItem.findIndex((item: CardDTO) => item.id === data.id) > -1){
            setBookmark(true)
        } else if (!getLocalStorageItem) return
        const escKeyDown = (event: KeyboardEvent) => {
            if(event.key === 'Escape') closeDialog();
        }
        document.addEventListener("keydown", escKeyDown);
        return () => document.removeEventListener("keydown", escKeyDown);
    }, []);

    return <div className={'fixed inset-0 z-10 flex items-center justify-center w-full h-screen bg-transparent'}>
        <div className={'flex flex-col items-center justify-between w-1/2 h-[700px] bg-gray-100 rounded-xl'}>
            <div className={'flex items-center justify-between w-full h-[70px] px-4 border-b border-gray-300 flex-shrink-0'}>
                <div className={'flex items-center justify-start gap-2'}>
                    <button className={'flex items-center justify-center border-none outline-none bg-transparent cursor-pointer'} onClick={closeDialog}>
                        {/*구글 아이콘 사용*/}
                        <span className={'material-symbols-outlined'} style={{fontSize: 28 + 'px'}}>
                            close
                        </span>
                    </button>
                    <img src={data.user.profile_image.small} alt={"프로필사진"} className={'rounded-full'}/>
                    <span className={'font-semibold'}>{data.user.name}</span>
                </div>
                <div className={'flex items-center justify-center gap-2'}>
                    <button onClick={()=>addBookmark(data)}
                        className={'flex items-center justify-center py-1 px-[6px] rounded-md text-center cursor-pointer bg-white border border-gray-300 text-gray-600'}>
                        {/*구글 아이콘 사용*/}
                        {bookmark === false ? (
                            <span className={'material-symbols-outlined'} style={{fontSize: 16 + 'px'}}>
                            favorite
                        </span>
                        ) : (<span className={'material-symbols-outlined'} style={{fontSize: 16 + 'px', color: 'red'}}>
                            favorite
                        </span>)
                        }
                        북마크
                    </button>
                    <button className={'flex items-center justify-center py-1 px-[6px] rounded-md text-center cursor-pointer bg-white border border-gray-300 text-gray-600'}>다운로드</button>
                </div>
            </div>
            <div className={'flex flex-1 items-center justify-center w-full overflow-hidden'}>
                <img src={data.urls.small} alt={"상세 이미지"} className={'h-full object-cover'}/>
            </div>
            <div className={'flex flex-col items-center justify-center w-full h-[150px] px-6 gap-6 flex-shrink-0'}>
                <div className={'flex items-center justify-start gap-12'}>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-gray-500 font-medium'}>이미지 크기</span>
                        <span className={'text-black font-semibold'}>
                            {data.width} X {data.height}
                        </span>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-gray-500 font-medium'}>업로드</span>
                        <span className={'text-black font-semibold'}>{data.created_at.split("T")[0]}</span>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-gray-500 font-medium'}>마지막 업데이트</span>
                        <span className={'text-black font-semibold'}>{data.updated_at.split("T")[0]}</span>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-gray-500 font-medium'}>다운로드</span>
                        <span className={'text-black font-semibold'}>{data.likes}</span>
                    </div>
                </div>
                <div className={'flex items-center justify-start w-full gap-2'}>
                    {/*
                    이거 unsplash 데이터셋 확인 필요할듯? tag 데이터를 안보내줌
                    {data.tags.map((tag: Tag) => {
                        return (
                            <div className={'px-1 pt-2 pb-1.5 rounded-se bg-gray-200 text-gray-500'} key={tag.title}>
                                {tag.title}
                            </div>
                        )
                    })}*/}
                </div>
            </div>
        </div>
    </div>
}