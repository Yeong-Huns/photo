import {useNavigate} from "react-router-dom";

export const CommonHeader = () => {
    const navigate = useNavigate();

    const moveToPage = (url:string) => {
        if(url === 'main') navigate('/')
        if(url === 'bookmark') navigate('/bookmark');
    }

    return <header className={'flex items-center justify-between w-full px-4 p-2'}>
        <div className={'flex items-center justify-center h-full gap-2 cursor-pointer'} onClick={()=> moveToPage('main')}>
            <img className={'h-7'} src={"src/assets/icons/logo.svg"} alt={"logo"}/>
        </div>
        <div className={'flex items-center justify-center gap-4'}>
            <button className={'flex items-center justify-center cursor-pointer px-[10px] py-[6px] border font-semibold border-gray-300 rounded text-gray-400 bg-white'}>사진제출</button>
            <button onClick={()=>moveToPage('bookmark')}
                    className={'flex items-center justify-center cursor-pointer px-[10px] py-[6px] border font-semibold border-gray-300 rounded text-gray-400 bg-white'}>북마크
            </button>
            <span className={'text-gray-400 font-semibold text-md'}>YeongHun | vosxja1@gmail.com</span>
        </div>
    </header>
}