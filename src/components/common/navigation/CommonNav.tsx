import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {searchState} from "@/store/atoms/searchState.ts";
import {pageState} from "@/store/atoms/pageState.ts";

interface Navigation {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

export const CommonNav = () => {
    const location = useLocation();
    const [navigation, setNavigation] = useState<Navigation[]>([]);
    const [, setPage] = useRecoilState(pageState);
    const [, setSearch] = useRecoilState(searchState);
    const navigate = useNavigate();

    const moveToPage = (url:string) => {
        if(url === 'main') navigate('/')
        if(url === 'bookmark') navigate('/bookmark');
    }

    useEffect(() => {
        const fetchNavigation = async () => {
            try {
                /*임시데이터 :: 추후에 node server 에서 보내줄 예정*/
                const response = await axios("/data/temp.json");
                setNavigation(response.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchNavigation();
    }, []);

    useEffect(() => {
        //console.log(location.pathname);
        navigation.forEach((nav: Navigation) => {
            nav.isActive = false;
            if(nav.path === location.pathname || location.pathname.includes(nav.path)){
                nav.isActive = true;
                setSearch(nav.searchValue);
                setPage(1);
            }
        })
        setNavigation([...navigation]);
    }, [location.pathname]);

    const navLinks = navigation.map((item: Navigation) => {

        return (
            <Link to={item.path} key={item.path}
                  className={`flex items-center justify-center no-underline font-medium hover:text-gray-900 hover:font-semibold text-gray-500 border-b-none ${(item.isActive && 'text-gray-900 border-b-2 border-blue-500 font-semibold')}`}>
                <span>{item.label}</span>
            </Link>
        )
    })

    return (
        <header className={'flex items-center justify-between w-full p-3 bg-white bg-opacity-90  border-b-1 border-gray-300 sticky top-0 z-50'}>
            <div className={'flex items-center justify-center w-[8%] h-full gap-2 cursor-pointer'} onClick={()=> moveToPage('main')}>
                <img className={'h-7'} src={"src/assets/icons/logo.svg"} alt={"logo"}/>
            </div>
            {navLinks}
            <div className={'flex items-center justify-between w-[10%] mr-3'}>
                <button onClick={()=>moveToPage('bookmark')}
                        className={'flex items-center justify-center cursor-pointer px-3 py-2 border-none font-semibold border-gray-300 rounded-full text-gray-400 bg-transparent hover:bg-white hover:bg-opacity-75 ease-in-out transition duration-300'}>북마크
                </button>
                <span className={'text-gray-400 font-semibold text-md'}>YeongHun</span>
            </div>
        </header>
    )
}