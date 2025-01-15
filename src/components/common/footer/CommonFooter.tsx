export const CommonFooter = () => {
    return <footer className={'flex items-center justify-center w-full h-14 px-4 border border-gray-100 bg-white'}>
        <div className={'flex items-center justify-center w-full gap-2'}>
            <button className={'flex items-center justify-center w-6 h-6 py-1 px 2 text-gray-300 font-sans text-lg font-bold leading-4 bg-transparent border-none outline-none cursor-pointer hover:bg-gray-200 hover:border rounded-se hover:text-gray-700 focus:bg-gray-200 transition duration-300'}>
                <img src={'src/assets/icons/icon-arrowLeft.svg'} alt={'왼쪽화살표'}/>
            </button>
            {/*변경될 UI 부분*/}
            <span>1</span>
            <button className={'flex items-center justify-center w-6 h-6 py-1 px 2 text-gray-300 font-sans text-lg font-bold leading-4 bg-transparent border-none outline-none cursor-pointer hover:bg-gray-200 hover:border rounded-se hover:text-gray-700 focus:bg-gray-200 transition duration-300'}>
                <img src={'src/assets/icons/icon-arrowRight.svg'} alt={'왼쪽화살표'}/>
            </button>
        </div>
    </footer>
}