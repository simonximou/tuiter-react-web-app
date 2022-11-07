import React from "react";
import {Link} from "react-router-dom";
import "./index.css"
import {useSelector} from "react-redux";

const ProfileItem = () => {
    const profile = useSelector((state) => state.profile);
    return(
        <div className="row">
            <div className="col-12">
                <div className="position-relative">
                    <img className="w-100 position-relative" height="300" src={`${profile.bannerPicture}`}/>
                    <img className="wd-profile-profile rounded-circle position-absolute" height="150" width="150" src={`${profile.profilePicture}`}/>
                    <Link to="/tuiter/edit-profile">
                        <button className="rounded-pill btn float-end mt-2 ps-3 pe-3 fw-bold border-dark">
                            Edit Profile
                        </button>
                    </Link>
                </div>

                <div className="h4 fw-bold position-relative mt-5">
                    {profile.firstName} {profile.lastName}
                </div>
                <div className="text-secondary">
                    {profile.handle}
                </div>
                <div className="mt-3">
                    {profile.bio}
                </div>
                <div className="row">
                    <div className="col-8 mt-2">
                        <i className="bi bi-geo-alt"></i><span className="text-secondary">{profile.location}  </span>
                        <i className="bi bi-balloon-heart"></i><span className="text-secondary"> Born {profile.dateOfBirth}   </span>
                        <i className="bi bi-calendar3"></i><span className="text-secondary"> Joined {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mt-3 fw-bold">
                        {profile.followingCount} <span className="text-secondary fw-normal">
                Following
            </span>
                        <span className="ms-4">
                    {profile.followersCount} <span className="text-secondary fw-normal">
                Followers
            </span>
            </span>
                    </div>
                </div>


            </div>
        </div>


    );
};
export default ProfileItem;