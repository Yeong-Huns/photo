import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
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
                  className={'flex items-center justify-center h-full no-underline font-medium ' + (item.isActive ? 'text-gray-900 border-b-2 border-blue-500 font-semibold' : 'text-gray-500 border-b-none')}>
                <span>{item.label}</span>
            </Link>
        )
    })

    return (
        <nav className={'flex items-center justify-center w-full h-[50px] gap-12 border-b-1 border-gray-300'}>
            {navLinks}
        </nav>
    )
}