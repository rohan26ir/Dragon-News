import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 py-2'>
       <div>
        <img 
        className='w-[350px]' 
        src={logo} alt="" />
       </div>

       <div>
         <h2 className='text-gray-600'>Journalism Without Fear or Favour</h2>
       </div>

       <div>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
       </div>
    </div>
  );
};

export default Header;