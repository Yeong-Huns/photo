import {ToastMessage, toastState} from "@/store/atoms/toastState.ts";
import {useSetRecoilState} from "recoil";
import {useEffect, useState} from "react";

interface ToastProps {
    toast: ToastMessage;
}

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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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