import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "profileImg": "https://images.sk-static.com/images/media/profile_images/artists/5003643/huge_avatar",
    "name": "Martin Garrix",
    "userName": "@martingarrix",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comment":0,
    "retuit":0,
    "likes":0
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }

});
export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;