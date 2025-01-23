import {CardDTO} from "@/pages/index/types/card.ts";

interface Props {
    data: CardDTO;
    handleDialog: (eventValue: boolean) => void;
    handleSetData: (eventValue: CardDTO) => void;
}

export const Card = ({ data, handleDialog, handleSetData }:Props) => {

    const openDialog = () => {
        handleDialog(true);
        handleSetData(data);
    }

    return <div className={'bg-gray-200 rounded-md cursor-pointer'}>
        <img className={'w-full h-80 object-cover hover:scale-105 transition ease-in-out rounded-md'} src={data.urls.small} alt={data.alt_description} onClick={openDialog}/>
    </div>
}