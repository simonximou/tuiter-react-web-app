import React, {useState} from "react";
import Likes from "../tuits/tuits-list/liked-button";
import {useDispatch} from "react-redux";
import {updateTuitThunk, deleteTuitThunk} from "../../services/tuits-thunks";

const PostListItem = (
    {
        post = {
            "profileImg": "https://images.sk-static.com/images/media/profile_images/artists/5003643/huge_avatar",
            "name": "Martin Garrix",
            "userName": "martingarrix",
            "tuit":"Excited to be performing at Escape LA this year!",
            "time": "2h",
            "title": "Martin Garrix will be joining Escape LA this year",
            "image": "https://cdn.aspentimes.com/wp-content/uploads/sites/5/2018/01/bgarrix-atd-012618-2.jpg",
            "summary":"Ohh yeah everyone please come to Escape this year. There will be 30+ DJs plus the joining of Martin Garrix.",
            "comment":"1M+",
            "retuit":"1M+",
            "liked":"5M+",
            "dislikes":2
        }
    }
) => {
    const [like, setLike] = useState(false);
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <img className="rounded-circle" width="150%" src={`${post.profileImg}`} alt={""}/>
                    </div>
                    <div className="col-11">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                        <div className="fw-bold text-black">{post.name} <i className="fa-solid fa-circle-check"></i> <span
                            className="text-secondary fw-normal">{post.userName} · {post.time}</span></div>
                        <div className="text-black mb-2">{post.tuit}</div>
                        {/*<div className="container border border-light px-0 rounded-4">*/}
                        {/*    <div>*/}
                        {/*        <img className="rounded-top" width="100%" src={`${post.image}`} alt={""}/>*/}
                        {/*    </div>*/}
                        {/*    <div className="text-black m-2">{post.title}</div>*/}
                        {/*    <div className="text-secondary mb-2 ms-2 me-2">{post.summary}</div>*/}

                        {/*</div>*/}
                        <div className="row mt-3 mb-1">
                            <div className="col-2">
                                <div><i className="bi bi-chat"></i> {post.comment}</div>
                            </div>
                            <div className="col-2">
                                <div><i className="bi bi-arrow-repeat"></i> {post.retuit}</div>
                            </div>
                            <div className="col-3">
                                <div>
                                    <i onClick={() => dispatch(updateTuitThunk({
                                        ...post,
                                        likes: post.likes + 1
                                    }))} className="bi bi-heart-fill me-2 text-danger"></i>
                                    {post.likes}
                                </div>
                            </div>
                            <div className="col-2">
                                <div>
                                    <i onClick={() => dispatch(updateTuitThunk({
                                        ...post,
                                        dislikes: post.dislikes + 1
                                    }))} className="bi bi-hand-thumbs-down"></i>
                                    {post.dislikes}
                                </div>
                            </div>
                            <div className="col-2">
                                <div><i className="bi bi-share"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};
export default PostListItem;