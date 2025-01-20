import {imageData} from "@/store/selectors/imageSelectors.ts";
import {useRecoilState, useRecoilValue, useRecoilValueLoadable} from "recoil";
import {pageState} from "@/store/atoms/pageState.ts";
import {useEffect, useState} from "react";
import {searchState} from "@/store/atoms/searchState.ts";

export const CommonFooter = () => {
    const images = useRecoilValueLoadable(imageData);
    const search = useRecoilValue(searchState);
    const [page, setPage] = useRecoilState(pageState);
    const [step, setStep] = useState(0);

    useEffect(() => {
        setStep(0);
    }, [search]);

    // page List
    const newArr: number[] = [];
    for(let i = 1; i <= images.contents.total_pages; i++){
        newArr.push(i);
    }

    const length = newArr.length;
    const divide = Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0);
    const res = [];

    for(let i = 0; i <= divide; i++){
        res.push(newArr.splice(0, 10));
    }

    const moveToPage = (page: number) => {
        setPage(page);
    }

    const moveToPrev = () => {
        if(step === 0) return
        else {
            setStep(step - 1);
            setPage(res[step - 1][0]);
        }
    }

    const moveToNext = () => {
        if(step < res[step].length - 2) {
            setStep(step + 1);
            setPage(res[step + 1][0]);
        } else return
    }


    return <footer className={'flex items-center justify-center w-full h-14 px-4 border border-gray-100 bg-white'}>
        <div className={'flex items-center justify-center w-full gap-2'}>
            <button onClick={moveToPrev}
                    className={'flex items-center justify-center w-6 h-6 py-1 px 2 text-gray-300 font-sans text-lg font-bold leading-4 bg-transparent border-none outline-none cursor-pointer hover:bg-gray-200 hover:border rounded-se hover:text-gray-700 focus:bg-gray-200 transition duration-300'}>
                <img src={'src/assets/icons/icon-arrowLeft.svg'} alt={'왼쪽화살표'}/>
            </button>
            {/*변경될 UI 부분*/}
            {
                res[step] &&
                res[step].map((item:number, index:number) => {
                    if(item < 11) {
                        return <button className={index === page - 1 ? `text-gray-700 w-7 h-7 font-semibold bg-gray-200 p-2 flex justify-center items-center rounded-full` : `text-gray-700 w-7 h-7 font-medium p-2 flex justify-center items-center`} key={item} onClick={()=>moveToPage(item)}>{item}</button>
                    } else {
                        return <button className={index === page - 1 - step * 10 ? `text-gray-700 w-7 h-7 font-semibold bg-gray-200 p-2 flex justify-center items-center rounded-full` : `text-gray-700 w-7 h-7 font-medium p-2 flex justify-center items-center`} key={item} onClick={() => moveToPage(item)}>{item}</button>
                    }
                })
            }
            <button onClick={moveToNext}
                className={'flex items-center justify-center w-6 h-6 py-1 px 2 text-gray-300 font-sans text-lg font-bold leading-4 bg-transparent border-none outline-none cursor-pointer hover:bg-gray-200 hover:border rounded-se hover:text-gray-700 focus:bg-gray-200 transition duration-300'}>
                <img src={'src/assets/icons/icon-arrowRight.svg'} alt={'오른쪽화살표'}/>
            </button>
        </div>
    </footer>
}