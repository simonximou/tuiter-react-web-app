import PostListItem from "../post-list/PostListItem.js";
import React from "react";
import {useSelector} from "react-redux";


const PostList = () => {
    const postsArray = useSelector(state => state.tuitslist)
    return(
            <ul className="list-group">
                {postsArray.map(post =>
                    <PostListItem
                        key={post._id} post={post}/>)}
            </ul>
 );
}
export default PostList;