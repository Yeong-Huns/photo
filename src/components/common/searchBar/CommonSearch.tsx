export const CommonSearch = () => {
    return <div className={'flex items-center gap-7'}>
        <div className={'flex items-center justify-start w-[50vw] p-4 gap-4 rounded-lg border border-gray-300 bg-white shadow-lg shadow-gray-200 focus-within:ring focus-within:ring-blue-400 focus-within:outline-none'}>
            <input type={'text'} placeholder={'찾으실 이미지를 검색하세요.'} className={'focus:text-gray-800 outline-none border-none w-full text-lg font-medium text-gray-500'}/>
                <img src={'src/assets/icons/img.png'} alt={'search 이미지'}/>
        </div>
    </div>
}