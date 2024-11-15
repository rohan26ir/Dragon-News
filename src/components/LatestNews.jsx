import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div>
      <div className='flex gap-4 p-2 bg-gray-200'>
        <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p>

        <Marquee pauseOnHover={true} speed={100} className='space-x-10'>

          <Link to={'/'}>Lorem ipsum dolor sit amet.</Link>
          <Link to={'/'}>Lorem ipsum dolor sit amet.</Link>
          <Link to={'/'}>Lorem ipsum dolor sit amet.</Link>
          <Link to={'/'}>Lorem ipsum dolor sit amet.</Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;