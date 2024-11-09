
import NewsReducer from '../slice/NewsSlice';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        news:NewsReducer
    }
});

export default store;