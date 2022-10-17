import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
                    <div class="form col-11">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control form-input rounded-pill" placeholder="   Search anything...">
                    </div>
                    <div class="col-1"><a href="setting.html"><i class=" fa-solid fa-gear fa-2x"></i></a></div>
           </div>
           <ul class="nav mb-2 mt-2 nav-tabs">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="#">Entertainment</a>
                        </li>
                    </ul>
           </ul>
                <div class="wd-image">
                    <img width="100%" src="https://s.hdnux.com/photos/01/23/33/15/21869409/4/rawImage.jpg"/>
                    <h3 class="wd-txt">SpaceX's Starship</h3>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
