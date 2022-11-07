import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/me.json"

const currentUser = {
    firstName: 'Xi', lastName: 'Zhang', handle: '@therealxi',
    profilePicture: 'https://images.sk-static.com/images/media/profile_images/artists/5003643/huge_avatar', 	bannerPicture: 'https://www.robe.cz/api/images/news/2246/7835-1290x726-f2240d775b.jpg',
    bio: 'Full time cat lover. Sometimes code and listen to EDMs',
    website: 'youtube.com/martingarrix',
    location: 'San Jose, CA',	dateOfBirth: '06/16/1998',	dateJoined: '4/2009',
    followingCount: 234,	followersCount: 125863,
    initialState: profile
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: currentUser,
    reducers: {
        updateUser (state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.website = action.payload.website;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const { updateUser } = profileSlice.actions;
export default profileSlice.reducer;