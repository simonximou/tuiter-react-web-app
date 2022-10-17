const PostSummaryItem = (post) => {
    const topic = post.topic;
    const userName = post.userName;
    const time = post.time;
    const title = post.title;
    const image = post.image;
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col col-10">
                    <div class="text-secondary">${topic}</div>
                    <div class="fw-bold text-white">${userName} <i class="fa-solid fa-circle-check"></i> <span class="text-secondary fw-normal">- ${time}</span></div>
                    <div class="fw-bold text-white">${title}</div>
                </div>
                <div class="col col-2">
                    <img width="100%" src="${image}"/>
                </div>
            </div>       
</li>
 `);
}
export default PostSummaryItem;