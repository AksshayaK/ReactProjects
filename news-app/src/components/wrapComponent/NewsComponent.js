import NewsList from "../baseComponents/NewsList";
import NewsSearch from "../baseComponents/NewsSearch";
import React from "react";




const NewsComponent = () => {    
    return (<div>
        <h2>News Aggregator App</h2>
        <NewsSearch/>
        <NewsList/>
        </div>);
}

export default NewsComponent;