const NavigationSidebar = (active) => {
    if(active === "home"){
        return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a href="../HomeScreen/index.html" class="list-group-item active">
        <i class="fa fa-home text-white"></i> Home</a>
     <a href="../ExploreScreen/index.html" class="list-group-item">
        <i class="fa fa-hashtag"></i> Explore</a>
     <a href="../notifications.html" class="list-group-item">
        <i class="fa fa-bell"></i> Notifications</a>
     <a href="../messages.html" class="list-group-item">
        <i class="fa fa-mail-bulk text-white"></i> Messages</a>
     <a href="../bookmarks/index.html" class="list-group-item">
        <i class="fa fa-bookmark text-white"></i> BookMarks</a>
     <a href="../lists.html" class="list-group-item">
        <i class="fa fa-list text-white"></i> Lists</a>
     <a href="../profile.html" class="list-group-item ">
        <i class="fa fa-user text-white"></i> Profile</a>
     <a href="../more.html" class="list-group-item ">
        <i class="fa fa-dot-circle text-white"></i> More</a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
    }else if(active === "explore"){
        return(`
       <div class="list-group">
         <a class="list-group-item" href="/">
           <i class="fab fa-twitter"></i></a>
         <a href="../HomeScreen/index.html" class="list-group-item">
            <i class="fa fa-home text-white"></i> Home</a>
         <a href="../ExploreScreen/index.html" class="list-group-item active">
            <i class="fa fa-hashtag"></i> Explore</a>
         <a href="../notifications.html" class="list-group-item">
            <i class="fa fa-bell"></i> Notifications</a>
         <a href="../messages.html" class="list-group-item">
            <i class="fa fa-mail-bulk text-white"></i> Messages</a>
         <a href="../bookmarks/index.html" class="list-group-item">
            <i class="fa fa-bookmark text-white"></i> BookMarks</a>
         <a href="../lists.html" class="list-group-item">
            <i class="fa fa-list text-white"></i> Lists</a>
         <a href="../profile.html" class="list-group-item ">
            <i class="fa fa-user text-white"></i> Profile</a>
         <a href="../more.html" class="list-group-item ">
            <i class="fa fa-dot-circle text-white"></i> More</a>
       </div>
       <div class="d-grid mt-2">
         <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
       </div>
     `);
    }
}
export default NavigationSidebar;