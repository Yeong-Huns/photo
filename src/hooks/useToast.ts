import {useSetRecoilState} from "recoil";
import {ToastMessage, toastState} from "@/store/atoms/toastState.ts";

export const useToast = () => {
    const setToasts = useSetRecoilState(toastState);

    const addToast = (message: string, type: 'success' | 'error' | 'info') => {
        const id = Date.now(); // 고유 ID 생성
        const newToast: ToastMessage = { id, message, type };
        setToasts((prevToasts) => [...prevToasts, newToast]);
    };

    return { addToast };
};