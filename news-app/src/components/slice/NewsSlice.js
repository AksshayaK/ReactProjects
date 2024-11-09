import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const apiKey = process.env.REACT_APP_MY_KEY;

export const getNews = createAsyncThunk('fetch/getNews',
    async (query) => {
        try {
            const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
            const resp = await axios.get(apiUrl);
            return resp.data.articles;
        }
        catch (err) {
            console.log(" error ", err);
        }
    });
const newsSlice = createSlice({
    name: 'News',
    initialState: {
        articles: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getNews.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload;
            })
            .addCase(getNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default newsSlice.reducer;