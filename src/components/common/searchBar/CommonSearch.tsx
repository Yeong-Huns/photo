import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useRecoilState} from "recoil";
import {searchState} from "@/store/atoms/searchState.ts";
import {pageState} from "@/store/atoms/pageState.ts";

export const CommonSearch = () => {
    const [, setSearch] = useRecoilState(searchState)
    const [, setPage] = useRecoilState(pageState
    );
    const [text, setText] = useState('');
    const onSearch = () => {
        if(text==='') setSearch('Korea');
        else setSearch(text);
        setPage(1);
    }
    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === 'Enter') {
            if(text==='') setSearch('Korea');
            else setSearch(text);
            setPage(1);
        }
    }
    return <div className={'flex items-center gap-7'}>
        <div className={'flex items-center justify-start w-[50vw] p-4 gap-4 rounded-full  bg-gray-400 shadow-lg focus-within:bg-gray-300 focus-within:bg-opacity-70 hover:bg-gray-300 hover:bg-opacity-70  bg-opacity-70 '}>
            <input
                type={'text'}
                placeholder={'찾으실 이미지를 검색하세요.'}
                className={'focus:text-white outline-none border-none w-full text-lg font-medium text-white bg-transparent placeholder-white'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                value={text}
                onKeyDown={handleKeyDown}
            />
                <img
                    className={'hover:cursor-pointer'}
                    src={'src/assets/icons/icon-search.svg'}
                    alt={'search 이미지'}
                    onClick={onSearch}
                />
        </div>
    </div>
}