import { useEffect, useRef } from "react";
import { toast, TypeOptions, Id } from "react-toastify";

const useAutoSwitchToast = (enabled: boolean) => {
    const toastId = useRef<Id | null>(null);

    useEffect(() => {
        const message = enabled ? "Автоперехід увімкнено" : "Автоперехід вимкнено";
        const type: TypeOptions = enabled ? "success" : "warning";

        if (toastId.current && toast.isActive(toastId.current)) {
            toast.update(toastId.current, {
                render: message,
                type,
                autoClose: 3000,
                closeButton: true,
                draggable: true,
                closeOnClick: true,
                isLoading: false,
            });
        } else {
            toastId.current = toast(message, {
                type,
                autoClose: 3000,
                closeButton: true,
                draggable: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                hideProgressBar: false,
                onClose: () => {
                    toastId.current = null;
                }
            });
        }
    }, [enabled]);
};

export default useAutoSwitchToast;
