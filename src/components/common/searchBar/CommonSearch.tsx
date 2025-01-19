import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useRecoilState} from "recoil";
import {searchState} from "@/store/atoms/searchState.ts";

export const CommonSearch = () => {
    const [search, setSearch] = useRecoilState(searchState)
    const [text, setText] = useState('');
    const onSearch = () => {
        if(text===''){
            setSearch('Korea');
        }else {
            setSearch(text);
        }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === 'Enter') {
            if(text===''){
                setSearch('Korea');
            }else {
                setSearch(text);
            }
        }
    }
    return <div className={'flex items-center gap-7'}>
        <div className={'flex items-center justify-start w-[50vw] p-4 gap-4 rounded-lg border border-gray-300 bg-white shadow-lg shadow-gray-200 focus-within:ring focus-within:ring-blue-400 focus-within:outline-none'}>
            <input
                type={'text'}
                placeholder={'찾으실 이미지를 검색하세요.'}
                className={'focus:text-gray-800 outline-none border-none w-full text-lg font-medium text-gray-500'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                value={text}
                onKeyDown={handleKeyDown}
            />
                <img
                    className={'hover:cursor-pointer'}
                    src={'src/assets/icons/img.png'}
                    alt={'search 이미지'}
                    onClick={onSearch}
                />
        </div>
    </div>
}