import { useEffect } from "react";
import { toast } from "react-toastify";
import { Post } from "../types/Post.interface";

const usePostToast = (post: Post | null) => {
    useEffect(() => {
        if (post) {
            toast.dismiss();
            toast.info(`Пост #${post.id} Оновлення даних...`, {
                autoClose: 2000,
                closeButton: true,
                draggable: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                hideProgressBar: false,
            });
        }
    }, [post]);
};

export default usePostToast;
