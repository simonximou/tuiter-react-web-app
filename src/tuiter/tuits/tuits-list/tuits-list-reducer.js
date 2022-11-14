import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits.json';
import {updateTuitThunk, createTuitThunk,deleteTuitThunk, findTuitsThunk}
    from "../../../services/tuits-thunks";


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
const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }

    },
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuits =>
                    tuits._id === action.payload);
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