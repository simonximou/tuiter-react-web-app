import post from "../PostList/post.js";
import PostListItem from "../PostList/PostListItem.js";

const PostList = () => {
    return(`
            <ul class="list-group">
                ${post.map(posts => {return(PostListItem(posts));}).join('')}
            </ul>
 `);
}
export default PostList;