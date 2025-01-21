import {useNavigate} from "react-router-dom";

export const CommonHeader = () => {
    const navigate = useNavigate();

    const moveToPage = () => {
        navigate('/bookmark');
    }

    return <header className={'flex items-center justify-between w-full px-4 p-2'}>
        <div className={'flex items-center justify-center h-full gap-2'}>
            <img className={'h-7'} src={"src/assets/images/img_1.png"} alt={"logo"}/>
            <span className={'text-2xl font-semibold'}>photoSplash</span>
        </div>
        <div className={'flex items-center justify-center gap-4'}>
            <button className={'flex items-center justify-center cursor-pointer px-[10px] py-[6px] border font-semibold border-gray-300 rounded text-gray-400 bg-white'}>사진제출</button>
            <button onClick={moveToPage}
                    className={'flex items-center justify-center cursor-pointer px-[10px] py-[6px] border font-semibold border-gray-300 rounded text-gray-400 bg-white'}>북마크
            </button>
            <span className={'text-gray-400 font-semibold text-md'}>YeongHun | vosxja1@gmail.com</span>
        </div>
    </header>
}