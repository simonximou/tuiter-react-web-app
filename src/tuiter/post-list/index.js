import post from "../post-list/post.json";
import PostListItem from "../post-list/PostListItem.js";
import React from "react";

const PostList = () => {
    return(
            <ul className="list-group">
                {post.map(post =>
                    <PostListItem
                        key={post._id} post={post}/>)}
            </ul>
 );
}
export default PostList;