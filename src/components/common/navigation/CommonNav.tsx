import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

interface Navigation {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

export const CommonNav = () => {
    const [navigation, setNavigation] = useState<Navigation[]>([]);

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
    }, [])

    const navLinks = navigation.map((item: Navigation) => {
        return (
            <Link to={item.path} key={item.path} className={'flex items-center justify-center h-full no-underline text-gray-500 font-medium'}>
                <span>{item.label}</span>
            </Link>
        )
    })

    return (
        <div className={'flex items-center justify-center w-full h-[50px] gap-8 border-b-1 border-gray-300'}>
            {navLinks}
        </div>
    )
}