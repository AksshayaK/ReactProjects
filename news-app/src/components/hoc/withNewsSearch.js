import React from "react";
import {useDispatch} from 'react-redux';
import {getNews} from '../slice/NewsSlice';



const withNewsSearch = (WrapComponent) => {
    const News = (props) => {
       const dispatch = useDispatch();
        const handleSearch = (query) => {
           dispatch(getNews(query));
        }
        return (<WrapComponent {...props} fetchArticles={handleSearch} />);
    }
    return News;
}

export default withNewsSearch;