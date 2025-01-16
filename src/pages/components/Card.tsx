import {CardDTO} from "@/pages/index/types/card.ts";

interface Props {
    data: CardDTO;
    handleDialog: (eventValue: boolean) => void;
}

export const Card = ({ data, handleDialog }:Props) => {

    const openDialog = () => {
        handleDialog(true);
    }

    return <div className={'lg:w-50 lg:h-50 w-64 h-64 bg-gray-200 rounded-md cursor-pointer'}>
        <img className={'w-full h-full rounded-md object-cover'} src={data.urls.small} alt={data.alt_description} onClick={openDialog}/>
    </div>
}