import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const NewsList = () => {
  const { articles, loading, error } = useSelector((state) => state.news);
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  return (<div style={{ margin: '10px' }} className='border'>
    {articles?.length > 0 && articles.map((article) => (
      <div key={article.url} className="flex">
        <h5>{article.tile}</h5>
        <p>{article.description ? article.description.substring(0, 150) : ""}</p>
        <a href={article.url} target="_blank">Read more</a>
      </div>
    ))}
  </div>);
}

export default NewsList;