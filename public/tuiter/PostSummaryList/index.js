import post from "../PostSummaryList/post.js";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
            <ul class="list-group">
                ${post.map(posts => {return(PostSummaryItem(posts));}).join('')}
            </ul>
 `);
}
export default PostSummaryList;