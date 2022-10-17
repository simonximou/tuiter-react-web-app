const WhoToFollowListItem = (who) => {
    const avatarIcon = who.avatarIcon;
    const userName = who.userName;
    const handle = who.handle;
    return(`
                   <li class="list-group-item">
                        <div class="row">
                        <div class="col col-2">
                            <img class="rounded-circle" width="100%" src="${avatarIcon}"/>
                        </div>
                        <div class="col col-6">
                            <div class="text-white">${userName}<i class="fa-solid fa-circle-check"></i></div>
                            <div class="text-secondary">@${handle}</div>
                        </div>
                        <div class="col col-4">
                            <button class="rounded-pill btn btn-primary" width="100%">Follow</button>
                        </div>
                        </div>
                   </li>
 `);
}
export default WhoToFollowListItem;