import {useRecoilValue} from "recoil";
import {toastState} from "@/store/atoms/toastState.ts";
import {Toast} from "@components/common/toast/Toast.tsx";

export const ToastContainer: React.FC = () => {
    const toasts = useRecoilValue(toastState);

    return (
        <div className="fixed top-5 right-5 flex flex-col items-end space-y-2 z-50">
            {toasts.map((toast) => (
                <Toast key={toast.id} toast={toast} />
            ))}
        </div>
    );
};