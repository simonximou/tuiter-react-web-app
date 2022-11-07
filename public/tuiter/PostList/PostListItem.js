const PostListItem = (post) => {
    const profileImg = post.profileImg;
    const userName = post.userName;
    const time = post.time;
    const title = post.title;
    const image = post.image;
    const tuit = post.tuit;
    const summary = post.summary;
    const comment = post.comment;
    const retuit = post.retuit;
    const liked = post.liked;
    const name = post.name;
    return(`
        <div class="row border-bottom border-light mb-2">
            <div class="col-1">
                <img class="rounded-circle" width="150%" src="${profileImg}"/>
            </div>
            <div class="col-11">
                <div class="fw-bold text-white">${name} <i class="fa-solid fa-circle-check"></i> <span class="text-secondary fw-normal">${userName} · ${time}</span></div>
                <div class="text-white mb-2">${tuit}</div>
                <div class="container border border-light px-0 rounded-4">
                    <div>
                        <img class="rounded-top" width="100%" src="${image}"/>
                    </div>
                    <div class="text-white m-2">${title}</div>
                    <div class="text-secondary mb-2 ms-2 me-2">${summary}</div>
                
</div>
                <div class="row mt-3 mb-3">
                    <div class="col-3">
                        <div><i class="fa-regular fa-comment"></i>   ${comment}</div>
                    </div>
                    <div class="col-3">
                        <div><i class="fa-solid fa-arrows-rotate"></i> ${retuit}</div>
                    </div>
                    <div class="col-3">
                        <div><i class="fa-regular fa-heart"></i>   ${liked}</div>
                    </div>
                    <div class="col-3">
                        <div><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
                    </div>
                </div>
            </div>
        
        </div>
 `);
}
export default PostListItem;