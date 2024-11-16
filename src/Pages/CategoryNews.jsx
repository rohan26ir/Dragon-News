import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

  const {data : newsList} = useLoaderData() //name change "data" to "news"
  // console.log(newsList);
  return (
    <div>
      <h2>Total Posts:  {newsList.length} </h2>


      {
        newsList.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
      }


    </div>
  );
};

export default CategoryNews;