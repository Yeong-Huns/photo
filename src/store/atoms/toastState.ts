import { atom } from 'recoil';

export interface ToastMessage {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
}

export const toastState = atom<ToastMessage[]>({
    key: 'toastState',
    default: [],
});