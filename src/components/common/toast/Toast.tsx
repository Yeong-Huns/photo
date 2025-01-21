import {toastState} from "@/store/atoms/toastState.ts";
import {useSetRecoilState} from "recoil";
import {useEffect, useState} from "react";


const typeStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
};

export const Toast = ({ toast }) => {
    const setToasts = useSetRecoilState(toastState);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => {
                setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
            }, 500); // 애니메이션 시간과 일치
        }, 3000); // 3초 후 제거

        return () => clearTimeout(timer);
    }, [toast.id, setToasts]);

    const removeToast = () => {
        setVisible(false);
        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
        }, 500);
    };

    return (
        <div
            className={`max-w-xs w-full ${typeStyles[toast.type]} border border-gray-200 rounded-xl shadow-lg p-4 mb-4 transform transition-transform duration-300 ${
                visible ? 'toast-enter' : 'toast-exit'
            }`}
            role="alert"
        >
            <div className="flex">
                <div className="shrink-0">
                    {toast.type === 'success' && (
                        <svg
                            className="h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                        </svg>
                    )}
                    {toast.type === 'error' && (
                        <svg
                            className="h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                        </svg>
                    )}
                    {toast.type === 'info' && (
                        <svg
                            className="h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                        </svg>
                    )}
                </div>
                <div className="ms-3">
                    <p className="text-sm">{toast.message}</p>
                </div>
                <button
                    onClick={removeToast}
                    className="ml-auto text-white focus:outline-none"
                >
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};