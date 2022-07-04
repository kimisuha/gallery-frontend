import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://wallpaper-backend-v01.herokuapp.com/";

let initState = {
    listImages: [],
    listTopics: [],
    listCollections: [],
    searchResult: []
};

export const initImg = createAsyncThunk('gallery/initImg', async () => {
    const result = await axios.get(url).then(res => res.data);
    //console.log(result);
    return result;
});

export const initTopics = createAsyncThunk('gallery/initTopics', async () => {
    const result = await axios.get(url + 'all-topics').then((res) => res.data.response.results);
    //console.log("tp", result);
    return result;
});

export const initCollects = createAsyncThunk('gallery/initCollects', async () => {
    const result = await axios.get(url + 'all-collections').then(res => res.data.response.results);
    //console.log("cl", result);
    return result;
});

export const loadMore = createAsyncThunk('gallery/loadMore', async () => {
    const more = await axios.get(url).then(res => res.data);
    //console.log(more);
    return more;
});

export const search = createAsyncThunk('gallery/search', async (words) => {
    const search = await axios.get(url + 'search/' + words).then(res => res.data.response);
    let rsSearch = {
        keyword: words,
        result: search
    }
    return rsSearch;
})


export const gallerySlice = createSlice({
    name: "gallery",
    initialState: initState,
    reducers: {},
    extraReducers: {
        [initImg.pending]: () => console.log("....waiting!"),
        [initImg.rejected]: () => console.log("error!"),
        [initImg.fulfilled]: (state, action) => {
            console.log("success!")
            state.listImages = action.payload
            //console.log("state", state.listImages);
        },
        [initTopics.pending]: () => console.log("topic loading...."),
        [initTopics.rejected]: () => console.log("topic loading error!"),
        [initTopics.fulfilled]: (state, action) => {
            console.log("success topic loading");
            state.listTopics = action.payload;
        },
        [initCollects.pending]: () => console.log("collections pending...."),
        [initCollects.rejected]: () => console.log("reject request collections"),
        [initCollects.fulfilled]: (state, action) => {
            console.log("success request collection");
            state.listCollections = action.payload;
        },
        [loadMore.pending]: () => console.log('...loading'),
        [loadMore.rejected]: () => console.log('ooops! was error!'),
        [loadMore.fulfilled]: (state, action) => {
            console.log("add more image to gallery!");
            //console.log('more', action.payload);
            state.listImages = [...state.listImages,...action.payload];

        },
        [search.pending]: () => console.log('wait.....'),
        [search.rejected]: () => console.log('notfound!'),
        [search.fulfilled]: (state, action) => {
            console.log('found!');
            state.searchResult = action.payload;
        }
    }
});

const { reducer: galleryReducer } = gallerySlice;
export default galleryReducer;