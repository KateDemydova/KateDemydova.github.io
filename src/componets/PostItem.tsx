import React from "react";
import { Post } from "../types/Post.interface"
import "./PostItem.css"


export interface PostItemProps {
    post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {


    return (
        <li className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </li>
);
};

export default PostItem;